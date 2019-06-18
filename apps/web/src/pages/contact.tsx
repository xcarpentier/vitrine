import * as React from 'react'
import { MainTitle } from '../components/common/customs/CustomContent'
import { MainHead } from '@vitrine/common/src/core/ui/customs/CustomView'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import {
  withLayout,
  PageProps,
} from '../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'
import { CallToAction } from '../components/common/CallToAction'

const ContactPage = ({ openURL }: PageProps) => (
  <>
    <MainHead style={{ maxWidth: 510 }}>
      <MainTitle>Contact me!</MainTitle>
    </MainHead>
    <CallToAction onPress={() => openURL('mailto:xcapetir+cta@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Contact me!' }),
)(ContactPage)
