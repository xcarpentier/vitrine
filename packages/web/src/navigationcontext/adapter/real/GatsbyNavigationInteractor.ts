import {
  NavigationInteractor,
  RouteName,
} from '@vitrine/common/src/navigationcontext/domain/gateways/Navigation.interactor'
import { navigate } from 'gatsby'

export class GatsbyNavigationInteractor implements NavigationInteractor {
  navigateTo(routeName: RouteName, params?: any): void {
    navigate(routeName, { state: params })
  }
  navigateBack(): void {
    throw new Error('Method not implemented.')
  }
  popToTop(): void {
    throw new Error('Method not implemented.')
  }
}
