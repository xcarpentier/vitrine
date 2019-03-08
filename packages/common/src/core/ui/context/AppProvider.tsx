import * as React from 'react'
import { AppContext } from './AppContext'
import { Dependencies } from '../../../configuration/dependencies'
import { AppState } from '../../../configuration/app.state'
import { RouteName } from '../../domain/gateways/RouteName'
import { setStateAsync } from './SetStateAsync'

interface Props {
  children: React.ReactNode
  dependencies: Dependencies
}
export class AppProvider extends React.Component<Props, AppState> {
  state = {
    currentRoute: undefined,
  }

  navigateToAsync = async (currentRoute: RouteName, params?: any) => {
    await setStateAsync({ component: this, state: { currentRoute } })
    this.props.dependencies.navigationInteractor.navigateTo(
      currentRoute,
      params,
    )
  }

  render() {
    const { navigateToAsync: navigateTo } = this
    const { dependencies, ...props } = this.props
    return (
      <AppContext.Provider
        value={{
          ...dependencies,
          ...this.state,
          navigateTo,
        }}
        {...props}
      />
    )
  }
}
