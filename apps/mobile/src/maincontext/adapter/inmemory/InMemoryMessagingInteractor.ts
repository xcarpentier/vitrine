import { MessagingInteractor } from '../../domain/gateways/Messaging.interactor'
import { ChatMessage } from '../../domain/entities/ChatMessage'

const memory: { messages: ChatMessage[] } = {
  messages: [],
}

export class InMemoryMessagingInteractor implements MessagingInteractor {
  sendMessageAsync(message: ChatMessage): Promise<any> {
    memory.messages.push(message)
    console.log('sendMessageAsync', { message })
    return Promise.resolve()
  }
  loadMessagesAsync(): Promise<ChatMessage[]> {
    return Promise.resolve([
      {
        _id: 1,
        text: 'test',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'name',
        },
      },
    ])
  }
}
