import React from 'react'
import { AppContext } from '../context/AppContext'
import { AppContextType } from '../../../configuration/context'

export const withContext = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
) => (wrappedComponentProps: P) => (
  <AppContext.Consumer>
    {(params: AppContextType) => (
      <WrappedComponent {...wrappedComponentProps} {...params} />
    )}
  </AppContext.Consumer>
)
