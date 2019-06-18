import { MessagingInteractor } from '../domain/gateways/Messaging.interactor'
import { InMemoryMessagingInteractor } from '../adapter/inmemory/InMemoryMessagingInteractor'
import { UserInteractor } from '../domain/gateways/User.interactor'
import { InMemoryUserInteractor } from '../adapter/inmemory/inMemoryUserInteractor'
import { AppInteractor } from '../domain/gateways/App.interactor'
import { ExpoAppInteractor } from '../adapter/real/ExpoAppInteractor'

export class MainContextFactory {
  static messagingInteractor(): MessagingInteractor {
    return new InMemoryMessagingInteractor()
  }
  static userInteractor(): UserInteractor {
    return new InMemoryUserInteractor()
  }
  static appInteractor(): AppInteractor {
    return new ExpoAppInteractor()
  }
}
