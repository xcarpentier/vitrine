import * as React from 'react'
import { MainTitle } from '../components/common/customs/CustomContent'
import { Paragraph } from '../components/common/customs/CustomText'
import { Layout } from '../components/layout'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { PageRendererProps } from 'gatsby'

const NotFoundPage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
  location: { pathname },
}: AppContextType & PageRendererProps) => (
  <Layout
    {...{ navigateTo, currentRoute, openURL, pathname }}
    title="404: Not found"
  >
    <MainTitle>NOT FOUND</MainTitle>
    <Paragraph>You just hit a route that does not exist.</Paragraph>
  </Layout>
)

export default withContext(NotFoundPage)
