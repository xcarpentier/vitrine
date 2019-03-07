import * as React from 'react'

import { MainTitle } from '../components/common/customs/CustomContent'
import { Paragraph } from '../components/common/customs/CustomText'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'

const NotFoundPage = ({
  navigationInteractor: { navigateTo },
}: AppContextType) => (
  <Layout {...{ navigateTo }}>
    <HtmlHeader title="404: Not found" />
    <MainTitle>NOT FOUND</MainTitle>
    <Paragraph>You just hit a route that does not exist.</Paragraph>
  </Layout>
)

export default withContext(NotFoundPage)
