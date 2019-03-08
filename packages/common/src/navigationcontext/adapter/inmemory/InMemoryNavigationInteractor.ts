import { NavigationInteractor } from '../../domain/gateways/Navigation.interactor'
import { RouteName } from '../../../core/domain/gateways/RouteName'

export class InMemoryNavigationInteractor implements NavigationInteractor {
  openURL(url: string): void {
    console.log({ url })
  }
  navigateTo(routeName: RouteName, params?: any): void {
    console.log({ routeName, params })
  }
  navigateBack(): void {
    console.log('navigateBack')
  }
  popToTop(): void {
    console.log('popToTop')
  }
}
