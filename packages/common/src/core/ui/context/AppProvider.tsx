import * as React from 'react'
import { AppContext } from './AppContext'
import { Dependencies } from '../../../configuration/dependencies'
import { AppState } from '../../../configuration/app.state'

interface Props {
  children: React.ReactNode
  dependencies: Dependencies
}
export class AppProvider extends React.Component<Props, AppState> {
  state = {}
  render() {
    return (
      <AppContext.Provider
        value={{ ...this.props.dependencies, ...this.state }}
        {...this.props}
      />
    )
  }
}
