import { NotificationInteractor } from '../domain/gateways/Notification.interactor'
import { InMemoryNotificationInteractor } from '../adapter/inmemory/InMemoryNotificationInteractor'

export class NotificationContextFactory {
  static notificationInteractor(): NotificationInteractor {
    return new InMemoryNotificationInteractor()
  }
}
