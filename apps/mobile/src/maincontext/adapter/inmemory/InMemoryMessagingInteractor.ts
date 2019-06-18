import { MessagingInteractor } from '../../domain/gateways/Messaging.interactor'
import { ChatMessage } from '../../domain/entities/ChatMessage'
import { User } from '../../domain/entities/User'

const memory: { messages: ChatMessage[] } = {
  messages: [],
}

export class InMemoryMessagingInteractor implements MessagingInteractor {
  sendMessageAsync(message: ChatMessage, to: User): Promise<any> {
    memory.messages.push(message)
    console.log('sendMessageAsync', { message, to })
    return Promise.resolve()
  }
  loadMessagesAsync(): Promise<ChatMessage[]> {
    return Promise.resolve([
      {
        _id: 1,
        text: 'test',
        createdAt: new Date(),
        user: {
          _id: 'test',
          name: 'name',
        },
      },
    ])
  }
}
