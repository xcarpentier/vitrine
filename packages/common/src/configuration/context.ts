import { Dependencies } from './dependencies'
import { AppState } from './app.state'
import { RouteName } from '../core/domain/gateways/RouteName'

interface Reducer {
  navigateTo(routeName: RouteName, params?: any): void
}
export type AppContextType = Dependencies & AppState & Reducer
