import { NavigationInteractor } from '../navigationcontext/domain/gateways/Navigation.interactor'
import { navigationContextDependencies } from '../navigationcontext/configuration/navigationContextDependencies'

export interface Dependencies {
  navigationInteractor: NavigationInteractor
}

export const inMemoryDependencies: Dependencies = {
  ...navigationContextDependencies,
}
