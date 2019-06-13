import { MainContextFactory } from './mainContextFactory'

export const mainContextDependencies = {
  mainInteractor: MainContextFactory.messagingInteractor(),
}
