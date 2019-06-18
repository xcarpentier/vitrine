import { MainContextFactory } from './mainContextFactory'

export const mainContextDependencies = {
  mainInteractor: MainContextFactory.messagingInteractor(),
  userInteractor: MainContextFactory.userInteractor(),
  appInteractor: MainContextFactory.appInteractor(),
}
