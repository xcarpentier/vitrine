import {
  NotificationInteractor,
  NotificationCallback,
  Unsubscribe,
} from '../../domain/gateways/Notification.interactor'
import { Notifications } from 'expo'
import Constants from 'expo-constants'

export class ExpoNotificationInteractor implements NotificationInteractor {
  subscribeAsync(): Promise<string | undefined> {
    if (Constants.isDevice) {
      return Notifications.getExpoPushTokenAsync()
    }
    return Promise.resolve('token')
  }
  onNotification(callback: NotificationCallback): Unsubscribe {
    const eventSubscription = Notifications.addListener(callback)
    return () => {
      eventSubscription.remove()
    }
  }
}
