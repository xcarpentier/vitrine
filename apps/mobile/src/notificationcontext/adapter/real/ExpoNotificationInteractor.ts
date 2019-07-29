import {
  NotificationInteractor,
  NotificationCallback,
  Unsubscribe,
} from '../../domain/gateways/Notification.interactor'
import { Notifications } from 'expo'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { PushSubscription } from '../../domain/entities/PushSubscription'

export class ExpoNotificationInteractor implements NotificationInteractor {
  async subscribeAsync(): Promise<PushSubscription | undefined> {
    if (Constants.isDevice) {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
      if (status !== 'granted') {
        const { status: askStatus } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS,
        )
        if (askStatus !== 'granted') {
          return Promise.reject('not granted')
        }
      }
      return {
        pushType: 'mobile-push',
        token: await Notifications.getExpoPushTokenAsync(),
      }
    }
    return { pushType: 'mobile-push', token: 'token' }
  }

  onNotification(callback: NotificationCallback): Unsubscribe {
    const eventSubscription = Notifications.addListener(callback)
    return () => {
      eventSubscription.remove()
    }
  }
}
