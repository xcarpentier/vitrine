import * as React from 'react'
import {
  MainTitle,
  MainIntro,
} from '../components/common/customs/CustomContent'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import {
  PageProps,
  withLayout,
} from '../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'
import { CallToAction } from '../components/common/CallToAction'
import { MainHead } from '@vitrine/common/src/core/ui/customs/CustomView'

const NotFoundPage = ({ openURL }: PageProps) => (
  <>
    <MainHead style={{ maxWidth: 510 }}>
      <MainTitle>NOT FOUND</MainTitle>
      <MainIntro>You just hit a route that does not exist.</MainIntro>
    </MainHead>
    <CallToAction onPress={() => openURL('mailto:xcapetir+cta@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Not found' }),
)(NotFoundPage)
