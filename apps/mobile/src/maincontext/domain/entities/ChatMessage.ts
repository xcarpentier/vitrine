export interface ChatMessage {
  _id: any
  text: string
  createdAt: Date
  user: {
    _id: any
    name?: string
    avatar?: string
  }
}
