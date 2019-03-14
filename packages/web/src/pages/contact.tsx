import * as React from 'react'
import {
  BoxTitle,
  MainIntro,
  MainTitle,
} from '../components/common/customs/CustomContent'
import { BorderBox, MainHead } from '../components/common/customs/CustomView'
import { Layout } from '../components/layout'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { PageRendererProps } from 'gatsby'

const ContactPage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
  location: { pathname },
}: AppContextType & PageRendererProps) => (
  <Layout
    {...{ navigateTo, currentRoute, openURL, pathname }}
    title="Contact me!"
  >
    <MainHead style={{ maxWidth: 510 }}>
      <MainTitle>Contact me!</MainTitle>
      <MainIntro>
        I favour collaboration with start-ups driven by an innovative idea (and
        willing to pay the fair value of an experienced developer). Is that you?
        If so, I'd be delighted to work on your project!
      </MainIntro>
    </MainHead>
    <BorderBox>
      <BoxTitle>How can you work with me?</BoxTitle>
    </BorderBox>
  </Layout>
)

export default withContext(ContactPage)
