import { NavigationInteractor } from '@vitrine/common/src/navigationcontext/domain/gateways/Navigation.interactor'
import { navigate } from 'gatsby'
import { RouteName } from '@vitrine/common/src/core/domain/gateways/RouteName'
import { Linking } from 'react-native'

export class GatsbyNavigationInteractor implements NavigationInteractor {
  openURL(url: string): void {
    Linking.openURL(url)
  }
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
