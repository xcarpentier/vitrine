self.addEventListener('message', function(event) {
  let data = JSON.parse(event.data)

  self.notificationIcon = data.notificationIcon
})

self.addEventListener('push', event => {
  let payload = {}
  try {
    payload = event.data.json()
  } catch (e) {
    payload = { title: 'Xavier Carpentier', body: event.data.text() }
  }

  const title = payload.title
  let options = {
    body: payload.body,
    data: payload.data || {},
    icon: 'https://www.dropbox.com/s/g3l3lxaqjbnr4sn/me-1-400x400.jpg?raw=1',
  }
  if (payload.data && payload.data._tag) {
    options.tag = payload.data._tag
    options.renotify = payload.data._renotify
  }

  event.waitUntil(
    (async function() {
      try {
        await self.registration.showNotification(title, options)
        const channel = new BroadcastChannel('notification')
        if (channel) {
          channel.postMessage({ text: payload.body })
        }
      } catch (error) {
        console.error(error)
      }
    })(),
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  event.waitUntil(
    (async function() {
      const allClients = await self.clients.matchAll({
        includeUncontrolled: true,
      })

      let appClient

      let path = event.notification.data._webPath || '/'

      // Let's see if we already have a window open:
      for (const client of allClients) {
        const url = new URL(client.url)

        if (url.pathname === path) {
          // Excellent, let's use it!
          client.focus()
          appClient = client
          break
        }
      }

      // If we didn't find an existing window,
      // open a new one:
      if (!appClient) {
        appClient = await self.clients.openWindow(path)
      }

      // Message the client:
      appClient.postMessage(event.notification.data)
    })(),
  )
})

// Import the script generated by workbox.
self.importScripts('service-worker.js')