import { Notification } from '../entities/Notification'
import { PushSubscription } from '../entities/PushSubscription'

export type NotificationCallback = (notification: Notification) => void
export type Unsubscribe = () => void

export interface NotificationInteractor {
  subscribeAsync(): Promise<PushSubscription | undefined>
  onNotification(callback: NotificationCallback): Unsubscribe
}
