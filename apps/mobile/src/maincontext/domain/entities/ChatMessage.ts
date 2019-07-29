import { User } from './User'

export interface ChatMessage {
  _id: any
  text: string
  createdAt: Date
  user: User
}
