import { NavigationInteractor } from '@vitrine/common/src/navigationcontext/domain/gateways/Navigation.interactor'
import { InMemoryNavigationInteractor } from '../adapter/inmemory/InMemoryNavigationInteractor'

export class NavigationContextFactory {
  static navigationInteractor(): NavigationInteractor {
    return new InMemoryNavigationInteractor()
  }
}
