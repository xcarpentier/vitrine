import {
  NotificationInteractor,
  NotificationCallback,
  Unsubscribe,
} from '../../domain/gateways/Notification.interactor'
import env from '../../../../configuration/env.json'
import * as Permissions from 'expo-permissions'
import { PushSubscription } from '../../domain/entities/PushSubscription'
import { createId } from '@vitrine/common/lib/core/domain/entities/createId.helper'

function guardPermission() {
  if (!('Notification' in window)) {
    throw new Error('The Notification API is not available on this device.')
  }
  if (!navigator.serviceWorker) {
    throw new Error(
      'Notifications cannot be sent because the service worker API is not supported on this device.',
    )
  }
  // if (!navigator.serviceWorker.controller) {
  //   throw new Error(
  //     'Notifications cannot be sent because there is no service worker controller registered. Ensure you have SSL certificates enabled.',
  //   )
  // }
  if (Notification.permission !== 'granted') {
    throw new Error(
      'Cannot use Notifications without permissions. Please request permissions with `expo-permissions`',
    )
  }
}

async function getRegistrationAsync(): Promise<ServiceWorkerRegistration> {
  guardPermission()
  const registration = await navigator.serviceWorker.getRegistration()
  if (!registration) {
    throw new Error('Failed to get notification registration!')
  }
  return registration
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export class WebNotificationInteractor implements NotificationInteractor {
  async subscribeAsync(): Promise<PushSubscription | undefined> {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    if (status !== 'granted') {
      const { status: askStatus } = await Permissions.askAsync(
        Permissions.NOTIFICATIONS,
      )
      if (askStatus !== 'granted') {
        return Promise.reject('not granted')
      }
    }
    const { pushManager } = await getRegistrationAsync()
    let pushSubscriptions = await pushManager.getSubscription()
    if (!pushSubscriptions) {
      const applicationServerKey = urlBase64ToUint8Array(env.webPush.public)
      pushSubscriptions = await pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      })
    }

    if (!pushSubscriptions) {
      return undefined
    }

    const { keys }: any = JSON.parse(JSON.stringify(pushSubscriptions))

    return { pushType: 'web-push', endpoint: pushSubscriptions.endpoint, keys }
  }

  onNotification(callback: NotificationCallback): Unsubscribe {
    const channel = new BroadcastChannel('notification')
    channel.onmessage = (msg: MessageEvent) =>
      callback({ id: createId(), text: msg.data.text })
    return () => {
      channel.close()
    }
  }
}
