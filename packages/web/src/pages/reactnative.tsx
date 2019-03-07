import * as React from 'react'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'
import { CallToAction } from '../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'

const ReactNativePage = ({
  navigationInteractor: { navigateTo },
}: AppContextType) => (
  <Layout {...{ navigateTo }}>
    <HtmlHeader title="Career history" />
    <CallToAction onPress={() => navigateTo('contact')} />
  </Layout>
)

export default withContext(ReactNativePage)
