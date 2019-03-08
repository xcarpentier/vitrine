import * as React from 'react'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'
import { CallToAction } from '../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { MainHead, Box } from '../components/common/customs/CustomView'
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
  ArticleTitle,
  ArticleContent,
} from '../components/common/ArticleContent'
import { Image } from 'react-native'
import { StepContainer, StepItem } from '../components/common/Step'
import { ProjectGrid } from '../components/shared/ProjectGrid'
import { CustomLink } from '../components/common/customs/CustomText'

const ReactNativePage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
}: AppContextType) => (
  <Layout {...{ navigateTo, currentRoute, openURL }}>
    <HtmlHeader title="Development with React Native" />
    <MainHead>
      <MainTitle>Mobile application development with React Native</MainTitle>
      <MainIntro>
        As a freelance application developer for startups, I regularly and
        enthusiastically train to keep up with the best tools!
      </MainIntro>
    </MainHead>
    <Box>
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
    <Box>
      <Article>
        <ArticleMediumLayer>
          <ArticleTitle>
            My work is used by over 2,200 developers worldwide
          </ArticleTitle>
          <ArticleContent>
            I take part in improving React Native technology and am involved in
            the community.{'\n'}
            {'\n'}
            <CustomLink
              onPress={() => openURL('https://github.com/xcarpentier')}
            >
              Find out more
            </CustomLink>
          </ArticleContent>
        </ArticleMediumLayer>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '90%' }}
            resizeMode="contain"
            source={require('../images/choix-pays.jpg')}
          />
        </ArticleSmallLayer>
      </Article>
    </Box>

    <CallToAction onPress={() => openURL('mailto:xcapetir@gmail.com')} />
  </Layout>
)

export default withContext(ReactNativePage)
