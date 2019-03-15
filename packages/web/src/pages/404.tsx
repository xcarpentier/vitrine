import * as React from 'react'
import { MainTitle } from '../components/common/customs/CustomContent'
import { Paragraph } from '../components/common/customs/CustomText'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import {
  PageProps,
  withLayout,
} from '../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'

const NotFoundPage = () => (
  <>
    <MainTitle>NOT FOUND</MainTitle>
    <Paragraph>You just hit a route that does not exist.</Paragraph>
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Not found' }),
)(NotFoundPage)
