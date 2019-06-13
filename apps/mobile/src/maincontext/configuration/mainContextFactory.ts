import { MessagingInteractor } from '../domain/gateways/Messaging.interactor'
import { InMemoryMessagingInteractor } from '../adapter/inmemory/InMemoryMessagingInteractor'

export class MainContextFactory {
  static messagingInteractor(): MessagingInteractor {
    return new InMemoryMessagingInteractor()
  }
}
