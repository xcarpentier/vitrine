import {
  NavigationInteractor,
  RouteName,
} from '../../domain/gateways/Navigation.interactor'

export class InMemoryNavigationInteractor implements NavigationInteractor {
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
