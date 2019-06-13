import { ChatMessage } from '../entities/ChatMessage'

export interface MessagingInteractor {
  loadMessagesAsync(): Promise<ChatMessage[]>
  sendMessageAsync(message: ChatMessage): Promise<any>
}
