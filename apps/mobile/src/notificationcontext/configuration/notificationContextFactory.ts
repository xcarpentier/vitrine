import { NotificationInteractor } from '../domain/gateways/Notification.interactor'
import { ExpoNotificationInteractor } from '../adapter/real/ExpoNotificationInteractor'

export class NotificationContextFactory {
  static notificationInteractor(): NotificationInteractor {
    return new ExpoNotificationInteractor()
  }
}
