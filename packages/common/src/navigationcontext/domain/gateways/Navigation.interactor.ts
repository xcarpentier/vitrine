import { RouteName } from '../../../core/domain/gateways/RouteName'

export interface NavigationInteractor {
  navigateTo(routeName: RouteName, params?: any): void
  navigateBack(): void
  popToTop(): void
  openURL(url: string): void
}
