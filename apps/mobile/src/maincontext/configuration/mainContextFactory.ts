import { MessagingInteractor } from '../domain/gateways/Messaging.interactor'
import { ExpoMessagingInteractor } from '../adapter/real/ExpoMessagingInteractor'
import { UserInteractor } from '../domain/gateways/User.interactor'
import { AppInteractor } from '../domain/gateways/App.interactor'
import { ExpoAppInteractor } from '../adapter/real/ExpoAppInteractor'
import { UserInteractorImpl } from '../adapter/real/UserInteractorImpl'

export class MainContextFactory {
  static messagingInteractor(): MessagingInteractor {
    return new ExpoMessagingInteractor()
  }
  static userInteractor(): UserInteractor {
    return new UserInteractorImpl()
  }
  static appInteractor(): AppInteractor {
    return new ExpoAppInteractor()
  }
}
