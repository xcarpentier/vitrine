import { Context, Callback } from 'aws-lambda'
import webpush from 'web-push'
import axios from 'axios'

const {
  SUBJECT_URL = '',
  PUBLIC_KEY = '',
  PRIVATE_KEY = '',
  DP_TOKEN,
} = process.env

webpush.setVapidDetails(SUBJECT_URL, PUBLIC_KEY, PRIVATE_KEY)

export async function handler(
  event: any,
  _context: Context,
  callback: Callback,
) {
  const message = JSON.parse(event.body)
  if (message.to._id === 'admin') {
    const { data } = await axios.post(
      'https://content.dropboxapi.com/2/files/download',
      {},
      {
        headers: {
          Authorization: `Bearer ${DP_TOKEN}`,
          'Dropbox-API-Arg': `{\"path\": \"/admin.json\"}`,
        },
      },
    )
    console.log({ data })
  } else {
    const { data } = await axios.post(
      'https://content.dropboxapi.com/2/files/download',
      {},
      {
        headers: {
          Authorization: `Bearer ${DP_TOKEN}`,
          'Dropbox-API-Arg': `{\"path\": \"/contacts/${message.to._id}.json\"}`,
        },
      },
    )
    console.log({ data })
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ event }),
  })
}
