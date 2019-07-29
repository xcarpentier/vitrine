import { MessagingInteractor } from '../../domain/gateways/Messaging.interactor'
import { ChatMessage } from '../../domain/entities/ChatMessage'
import { User } from '../../domain/entities/User'
import env from '../../../../configuration/env.json'
import { createStorageSlot } from 'react-native-storage-slot'

const Storage = createStorageSlot<ChatMessage[]>('messages')

const getOrCreateMessage = async (): Promise<ChatMessage[]> => {
  const messages = await Storage.get()
  if (messages) {
    return messages.reverse()
  }
  Storage.set([])
  return []
}

export class ExpoMessagingInteractor implements MessagingInteractor {
  async saveMessageAsync(message: ChatMessage): Promise<any> {
    const messages = await getOrCreateMessage()
    Storage.set([message, ...messages])
    return Promise.resolve()
  }
  async sendMessageAsync(message: ChatMessage, to: User): Promise<any> {
    const messages = await getOrCreateMessage()
    Storage.set([message, ...messages])
    await fetch(`${env.functions.base}${env.functions.notification}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message.text,
        to,
      }),
    })
  }
  async loadMessagesAsync(): Promise<ChatMessage[]> {
    return (await getOrCreateMessage()).sort(
      (m1: ChatMessage, m2: ChatMessage) =>
        new Date(m1.createdAt).getTime() - new Date(m2.createdAt).getTime(),
    )
  }
}
