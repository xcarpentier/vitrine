import React from 'react'

import { AppProvider } from '@vitrine/common/src/core/ui/context/AppProvider'
import { dependencies } from './src/configuration/dependencies'

export const wrapRootElement = ({ element }) => (
  <AppProvider {...{ dependencies }}>{element}</AppProvider>
)
