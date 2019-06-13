import React from 'react'
import { PageRendererProps } from 'gatsby'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { Layout } from '../layout'
import { HtmlHeaderProps } from '../HtmlHeader'

type ExtraProps = HtmlHeaderProps

export type LayoutPageProps = AppContextType & PageRendererProps
export interface PageProps {
  navigateTo: AppContextType['navigateTo']
  openURL(url: string): void
}

export const withLayout = (extraProps: ExtraProps) => <
  P extends LayoutPageProps
>(
  WrappedComponent: React.ComponentType<PageProps>,
) => ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
  location: { pathname },
  ...props
}: P) => (
  <Layout {...{ navigateTo, currentRoute, openURL, pathname, ...extraProps }}>
    <WrappedComponent {...{ navigateTo, openURL }} {...props} />
  </Layout>
)
