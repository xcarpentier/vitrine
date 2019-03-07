import * as React from 'react'
import {
  MainIntro,
  MainTitle,
  BoxTitle,
} from '../components/common/customs/CustomContent'
import { MainHead, Box } from '../components/common/customs/CustomView'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'
import { CallToAction } from '../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'

const ProjectPage = ({
  navigationInteractor: { navigateTo },
}: AppContextType) => (
  <Layout {...{ navigateTo }}>
    <HtmlHeader title="Success stories" />
    <MainHead>
      <MainTitle>
        Projects that prove combining speed and quality isn't a myth
      </MainTitle>
      <MainIntro>
        Here are 3 applications I developed very quickly, all the while
        resulting in a fast and responsive application.
      </MainIntro>
    </MainHead>
    <Box>
      <BoxTitle>TODO</BoxTitle>
    </Box>
    <CallToAction onPress={() => navigateTo('contact')} />
  </Layout>
)

export default withContext(ProjectPage)
