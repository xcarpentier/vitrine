import { NotificationInteractor } from '../domain/gateways/Notification.interactor'
import { ExpoNotificationInteractor } from '../adapter/real/ExpoNotificationInteractor'
import { Platform } from 'react-native'
import { WebNotificationInteractor } from '../adapter/real/WebNotificationInteractor'

export class NotificationContextFactory {
  static notificationInteractor(): NotificationInteractor {
    if (Platform.OS === 'web') {
      return new WebNotificationInteractor()
    } else {
      return new ExpoNotificationInteractor()
    }
  }
}
