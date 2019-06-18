import * as React from 'react'
import { CallToAction } from '../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { MainHead, Box } from '@vitrine/common/src/core/ui/customs/CustomView'
import {
  MainTitle,
  MainIntro,
  BoxContent,
  BoxTitle,
} from '../components/common/customs/CustomContent'
import {
  Article,
  ArticleSmallLayer,
  ArticleMediumLayer,
} from '../components/common/ArticleContent'
import { Image } from 'react-native'
import { StepContainer, StepItem } from '../components/common/Step'
import { ProjectGrid } from '../components/shared/ProjectGrid'

import {
  PageProps,
  withLayout,
} from '../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'
import { OpenSourceBox } from '../components/shared/OpenSourceBox'

const ReactNativePage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <MainHead>
      <MainTitle>Mobile application development with React Native</MainTitle>
      <MainIntro>
        As a freelance application developer for startups, I regularly and
        enthusiastically train to keep up with the best tools!
      </MainIntro>
    </MainHead>
    <Box hiddenXS>
      <BoxTitle>Why do I use React Native for mobile development ?</BoxTitle>
      <BoxContent>
        I don't choose a technology because of the buzz that surrounds it, but
        according to the effectiveness and quality of the applications I develop
        with this tool.
      </BoxContent>
      <Article>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '90%' }}
            resizeMode="contain"
            source={require('../images/react.svg')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <StepContainer>
            <StepItem
              numberTitle={1}
              title="One can create an iOS & Android application"
              subtitle="to save precious time for development"
            />
            <StepItem
              numberTitle={2}
              title="Programming iterations are made faster"
              subtitle="facilitating regular updates"
            />
            <StepItem
              numberTitle={3}
              title="Being developed by Facebook"
              subtitle="its development can be trusted"
              hideBorder
            />
          </StepContainer>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box>
      <BoxTitle>Projects I developed with React Native</BoxTitle>
      <BoxContent>
        Making the most of Facebook technology (React Native), I have been able
        to develop and benefit from a fast and responsive application all at
        once. Here's what I came up with:
      </BoxContent>
      <ProjectGrid {...{ navigateTo }} />
    </Box>
    <OpenSourceBox {...{ navigateTo }} />
    <CallToAction
      onPress={() => openURL('mailto:xcapetir+reactnative@gmail.com')}
    />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'React-Native' }),
)(ReactNativePage)
