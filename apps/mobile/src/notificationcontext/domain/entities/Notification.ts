export interface Notification {
  id: string
  text: string
  userId?: string
  origin?: 'selected' | 'received'
}
