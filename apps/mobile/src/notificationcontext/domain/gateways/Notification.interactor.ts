import { Notification } from '../entities/Notification'

export type NotificationCallback = (notification: Notification) => void

export interface NotificationInteractor {
  subscribeAsync(): Promise<boolean>
  onNotification(callback: NotificationCallback): void
}
