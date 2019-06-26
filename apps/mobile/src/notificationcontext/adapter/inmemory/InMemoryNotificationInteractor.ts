import {
  NotificationInteractor,
  NotificationCallback,
  Unsubscribe,
} from '../../domain/gateways/Notification.interactor'
import { createId } from '@vitrine/common/lib/core/domain/entities/createId.helper'

export class InMemoryNotificationInteractor implements NotificationInteractor {
  subscribeAsync(): Promise<string | undefined> {
    return Promise.resolve('token')
  }
  onNotification(callback: NotificationCallback): Unsubscribe {
    const intervalId = setInterval(() => {
      callback({
        id: createId(),
        text: 'a test from notification',
        pushToken: 'test',
      })
    }, 60000)
    return () => {
      clearInterval(intervalId)
    }
  }
}
