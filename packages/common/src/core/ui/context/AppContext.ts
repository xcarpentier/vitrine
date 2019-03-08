import * as React from 'react'
import { AppContextType } from '../../../configuration/context'
import { inMemoryDependencies } from '../../../configuration/dependencies'

export const AppContext = React.createContext<AppContextType>({
  ...inMemoryDependencies,
  navigateTo: () => {},
})
