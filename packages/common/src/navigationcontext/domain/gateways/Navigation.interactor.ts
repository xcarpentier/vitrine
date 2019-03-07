export type RouteName =
  | '/'
  | 'project'
  | 'reactnative'
  | 'contact'
  | 'papott'
  | 'sneat'
  | 'docdok'
  | 'expertise'

export interface NavigationInteractor {
  navigateTo(routeName: RouteName, params?: any): void
  navigateBack(): void
  popToTop(): void
}
