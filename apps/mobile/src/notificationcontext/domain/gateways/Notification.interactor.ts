import { Notification } from '../entities/Notification'

export type NotificationCallback = (notification: Notification) => void
export type Unsubscribe = () => void

export interface NotificationInteractor {
  subscribeAsync(): Promise<string | undefined>
  onNotification(callback: NotificationCallback): Unsubscribe
}
