import { MessagingInteractor } from '../../domain/gateways/Messaging.interactor'
import { ChatMessage } from '../../domain/entities/ChatMessage'
import { User } from '../../domain/entities/User'
import { createStorageSlot } from 'react-native-storage-slot'

const Storage = createStorageSlot<ChatMessage[]>('messages')

const getOrCreateMessage = async () => {
  const messages = await Storage.get()
  if (messages) {
    return messages
  }
  Storage.set([])
  return []
}

export class ExpoMessagingInteractor implements MessagingInteractor {
  async sendMessageAsync(message: ChatMessage, _to: User): Promise<any> {
    const messages = await getOrCreateMessage()
    Storage.set([message, ...messages])
    // TODO: fetch()
    return Promise.resolve()
  }
  async loadMessagesAsync(): Promise<ChatMessage[]> {
    return getOrCreateMessage()
  }
}
