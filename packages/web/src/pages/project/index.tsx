import * as React from 'react'
import {
  MainIntro,
  MainTitle,
} from '../../components/common/customs/CustomContent'
import { MainHead } from '../../components/common/customs/CustomView'
import { Layout } from '../../components/layout'
import { CallToAction } from '../../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { SneatBox } from './sneat'
import { PapottBox } from './papott'
import { DocdokBox } from './docdok'
import { PageRendererProps } from 'gatsby'

const ProjectPage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
  location: { pathname },
}: AppContextType & PageRendererProps) => (
  <Layout
    {...{ navigateTo, currentRoute, openURL, pathname }}
    title="Success stories"
  >
    <MainHead>
      <MainTitle>
        Projects that prove combining speed and quality isn't a myth
      </MainTitle>
      <MainIntro>
        Here are 3 applications I developed very quickly, all the while
        resulting in a fast and responsive application.
      </MainIntro>
    </MainHead>
    <SneatBox {...{ navigateTo }} />
    <PapottBox />
    <DocdokBox />
    <CallToAction
      onPress={() => openURL('mailto:xcapetir+project@gmail.com')}
    />
  </Layout>
)

export default withContext(ProjectPage)
