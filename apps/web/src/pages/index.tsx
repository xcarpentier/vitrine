import * as React from 'react'
import { Image } from 'react-native'
import { compose } from 'recompose'
import {
  Article,
  ArticleContent,
  ArticleMediumLayer,
  ArticleSmallLayer,
  ArticleXSLayer,
} from '../components/common/ArticleContent'
import { CallToAction } from '../components/common/CallToAction'
import { CustomButton } from '../components/common/customs/CustomButton'
import {
  BoxContent,
  BoxSubtitle,
  BoxSubtitleHr,
  BoxTitle,
  MainIntro,
  MainTitle,
} from '../components/common/customs/CustomContent'
import { CustomLink } from '@vitrine/common/src/core/ui/customs/CustomText'
import {
  Box,
  CustomView,
  MainHead,
} from '@vitrine/common/src/core/ui/customs/CustomView'
import { StepContainer, StepItem } from '../components/common/Step'
import {
  TestimonyAuthor,
  TestimonyContent,
} from '../components/common/Testimony'

import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { ProjectGrid } from '../components/shared/ProjectGrid'

import {
  withLayout,
  PageProps,
} from '../components/higherOrderComponent/withLayout'
import { OpenSourceBox } from '../components/shared/OpenSourceBox'
import { GalleryBox } from '../components/shared/GalleryBox'
import { HiddenXS } from '@vitrine/common/lib/core/ui/customs/CustomView'

const IndexPage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <MainHead>
      <MainTitle>Need to quickly develop a high-end mobile app?</MainTitle>
      <MainIntro>
        Benefit from my expertise and selection of solutions to equip yourself
        with a native iOS and Android application - faster than traditional
        mobile development. All this with great quality, drawing on my 10 years
        of experience.
      </MainIntro>
      <CustomButton
        size="l"
        title="Contact me!"
        onPress={() => openURL('mailto:xcapetir+home@gmail.com')}
      />
    </MainHead>
    <Box>
      <BoxTitle>Some Success Stories</BoxTitle>
      <BoxContent>
        Making the most of Facebook technology (
        <CustomLink
          onPress={() => navigateTo('react-native-mobile-developer')}
          href="/react-native-mobile-developer"
        >
          React Native
        </CustomLink>
        ), I have been able to develop and benefit from a fast and responsive
        application all at once. Here's what I came up with:
      </BoxContent>
      <ProjectGrid {...{ navigateTo }} />
    </Box>
    <OpenSourceBox {...{ navigateTo }} />
    <Box hiddenXS>
      <BoxTitle>
        5 steps to increase your application's chances of success and launch it
        as quickly as possible
      </BoxTitle>
      <BoxSubtitle>Inspired by lean-agile methods</BoxSubtitle>
      <Article>
        <ArticleSmallLayer hiddenXS>
          <CustomView style={{ height: 250 }} justify="flex-start">
            <Image
              style={{ flex: 1, width: '100%' }}
              resizeMode="contain"
              source={require('../images/steps.png')}
            />
          </CustomView>
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <StepContainer>
            <StepItem
              numberTitle={1}
              title="You introduce me to your project"
              subtitle="I advise you by selecting the features best tailored to your needs."
            />
            <StepItem
              numberTitle={2}
              title="You test my skills"
              subtitle="with a satisfaction or money-back guaranteed assessment day."
            />
            <StepItem
              numberTitle={3}
              title="I develop the first, simplified version of your project for you"
              subtitle="focusing on the most important features to get a quick grasp of your idea"
            />
            <StepItem
              numberTitle={4}
              title="We continuously strive together to improve your mobile application"
              subtitle="notably by drawing on user feedback."
              hideBorder
            />
          </StepContainer>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box hiddenXS>
      <BoxTitle>It is possible to combine speed and quality?</BoxTitle>
      <BoxSubtitle>
        here is the opinion of a successful startup's technical manager
      </BoxSubtitle>

      <Article>
        <ArticleXSLayer hiddenXS>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50 }}
            resizeMode="contain"
            source={require('../images/alex-hajjar.jpeg')}
          />
        </ArticleXSLayer>
        <ArticleMediumLayer>
          <ArticleContent>
            Xavier is able to very rapidly develop complex features and manage
            the various issues relating to a project by himself.
            {'\n'}I particularly appreciated: his timeliness, his pragmatism and
            good ideas, his clear coding and attention to detail.{'\n'}- Alex
            Hajjar LegalStart CTO
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
      <BoxSubtitleHr>
        4 STARTUP FOUNDERS OR CTO GIVE THEIR OPINION
      </BoxSubtitleHr>
      <Article>
        <ArticleXSLayer>
          <TestimonyContent>
            "Xavier is a great professional who specializes in mobile
            development. I am looking forward to working with him in the future
            again."
          </TestimonyContent>
          <TestimonyAuthor
            name="Tomi Schütz"
            label="CTO at docdok.health AG"
            source={require('../images/tomi-schutz.jpg')}
          />
        </ArticleXSLayer>
        <ArticleXSLayer>
          <TestimonyContent>
            "Xavier is willingly available and very pleasant. He always comes up
            with bright ideas and is always on the lookout for detail and
            cutting-edge technology."
          </TestimonyContent>
          <TestimonyAuthor
            name="Alix O'byrne"
            label="Product Line Marketing Manager at LaFourchette"
            source={require('../images/alix.jpg')}
          />
        </ArticleXSLayer>
        <ArticleXSLayer>
          <TestimonyContent>
            "I needed to rapidly create an application. Xavier outreached my
            expectations by creating it in record time!"
          </TestimonyContent>
          <TestimonyAuthor
            name="Maxime Vitrey"
            label="Papott CEO"
            source={require('../images/maxime-vitrey.jpg')}
          />
        </ArticleXSLayer>
        <ArticleXSLayer>
          <TestimonyContent>
            "Xavier is genuinely impressive, rigorous and always on call to
            improve the application. We are 100 % satisfied with his service."
          </TestimonyContent>
          <TestimonyAuthor
            name="Benjamin Albarede"
            label="Wine Republik CEO"
            source={require('../images/Benjamin-ALBAREDE.png')}
          />
        </ArticleXSLayer>
      </Article>
    </Box>
    <GalleryBox {...{ openURL }} />
    <CallToAction onPress={() => openURL('mailto:xcapetir+cta@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({
    title: 'Xavier Carpentier',
    description: 'Need to quickly develop a high-end mobile app?',
  }),
)(IndexPage)
