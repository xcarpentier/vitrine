export interface Notification {
  id: string
  text: string
  pushToken: string
  origin?: 'selected' | 'received'
}
