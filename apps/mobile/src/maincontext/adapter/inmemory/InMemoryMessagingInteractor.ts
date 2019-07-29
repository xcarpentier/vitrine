import { MessagingInteractor } from '../../domain/gateways/Messaging.interactor'
import { ChatMessage } from '../../domain/entities/ChatMessage'
import { User } from '../../domain/entities/User'

const memory: { messages: ChatMessage[] } = {
  messages: [],
}

export class InMemoryMessagingInteractor implements MessagingInteractor {
  saveMessageAsync(message: ChatMessage): Promise<any> {
    memory.messages.push(message)
    console.log('sendMessageAsync', { message })
    return Promise.resolve()
  }
  sendMessageAsync(message: ChatMessage, to: User): Promise<any> {
    memory.messages.push(message)
    console.log('sendMessageAsync', { message, to })
    return Promise.resolve()
  }
  loadMessagesAsync(): Promise<ChatMessage[]> {
    return Promise.resolve(
      [
        {
          _id: 1,
          text: 'test 1',
          createdAt: new Date(),
          user: {
            _id: 'test',
            name: 'name',
          },
        },
        {
          _id: 2,
          text: 'test 2',
          createdAt: new Date(),
          user: {
            _id: 'test',
            name: 'name',
          },
        },
        {
          _id: 3,
          text: 'test 3 *****',
          createdAt: new Date(),
          user: {
            _id: 'test',
            name: 'name',
          },
        },
      ].reverse(),
    )
  }
}
