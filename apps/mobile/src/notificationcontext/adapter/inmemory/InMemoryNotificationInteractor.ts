import {
  NotificationInteractor,
  NotificationCallback,
  Unsubscribe,
} from '../../domain/gateways/Notification.interactor'
import { createId } from '@vitrine/common/lib/core/domain/entities/createId.helper'
import { PushSubscription } from '../../domain/entities/PushSubscription'

export class InMemoryNotificationInteractor implements NotificationInteractor {
  subscribeAsync(): Promise<PushSubscription | undefined> {
    return Promise.resolve(undefined)
  }

  onNotification(callback: NotificationCallback): Unsubscribe {
    const intervalId = setInterval(() => {
      callback({
        id: createId(),
        text: 'a test from notification',
      })
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }
}
