import {
  NotificationInteractor,
  NotificationCallback,
} from '../../domain/gateways/Notification.interactor'
import { createId } from '@vitrine/common/src/core/domain/entities/createId.helper'

export class InMemoryNotificationInteractor implements NotificationInteractor {
  subscribeAsync(): Promise<boolean> {
    return Promise.resolve(true)
  }
  onNotification(callback: NotificationCallback): void {
    setInterval(() => {
      callback({
        id: createId(),
        text: 'a test from notification',
        pushToken: 'test',
      })
    }, 60000)
  }
}
