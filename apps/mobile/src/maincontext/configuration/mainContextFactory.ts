import { MessagingInteractor } from '../domain/gateways/Messaging.interactor'
import { InMemoryMessagingInteractor } from '../adapter/inmemory/InMemoryMessagingInteractor'
import { UserInteractor } from '../domain/gateways/User.interactor'
import { InMemoryInteractor } from '../adapter/inmemory/inMemoryUserInteractor'

export class MainContextFactory {
  static messagingInteractor(): MessagingInteractor {
    return new InMemoryMessagingInteractor()
  }
  static userInteractor(): UserInteractor {
    return new InMemoryInteractor()
  }
}
