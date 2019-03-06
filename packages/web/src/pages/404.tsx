import * as React from 'react'

import { MainTitle } from '../components/common/customs/CustomContent'
import { Paragraph } from '../components/common/customs/CustomText'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <HtmlHeader title="404: Not found" />
    <MainTitle>NOT FOUND</MainTitle>
    <Paragraph>You just hit a route that does not exist.</Paragraph>
  </Layout>
)

export default NotFoundPage
