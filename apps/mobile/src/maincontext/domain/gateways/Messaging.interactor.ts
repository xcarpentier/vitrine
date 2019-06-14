import { ChatMessage } from '../entities/ChatMessage'
import { User } from '../entities/User'

export interface MessagingInteractor {
  loadMessagesAsync(): Promise<ChatMessage[]>
  sendMessageAsync(message: ChatMessage, to: User): Promise<any>
}
