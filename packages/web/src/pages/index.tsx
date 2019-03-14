import * as React from 'react'
import { Image } from 'react-native'
import { compose } from 'recompose'
import {
  Article,
  ArticleContent,
  ArticleMediumLayer,
  ArticleSmallLayer,
  ArticleTitle,
  ArticleXSLayer,
} from '../components/common/ArticleContent'
import { CallToAction } from '../components/common/CallToAction'
import { CustomButton } from '../components/common/customs/CustomButton'
import { CustomColor } from '../components/common/customs/CustomColor'
import {
  BoxContent,
  BoxSubtitle,
  BoxSubtitleHr,
  BoxTitle,
  MainIntro,
  MainTitle,
} from '../components/common/customs/CustomContent'
import { CustomLink, CustomText } from '../components/common/customs/CustomText'
import {
  Box,
  Centered,
  CustomView,
  MainHead,
} from '../components/common/customs/CustomView'
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
          onPress={() => navigateTo('reactnative')}
          href="/reactnative"
        >
          React Native
        </CustomLink>
        ), I have been able to develop and benefit from a fast and responsive
        application all at once. Here's what I came up with:
      </BoxContent>
      <ProjectGrid {...{ navigateTo }} />
    </Box>
    <Box>
      <Article>
        <ArticleMediumLayer>
          <ArticleTitle>
            My work is used by over{'\n'}2,200 developers worldwide
          </ArticleTitle>
          <ArticleContent>
            I take part in improving React Native technology and am involved in
            the all community.
          </ArticleContent>
          <CustomLink>Find out more</CustomLink>
        </ArticleMediumLayer>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
            source={require('../images/choix-pays.jpg')}
          />
        </ArticleSmallLayer>
      </Article>
    </Box>
    <Box>
      <BoxTitle>
        5 steps to increase your application's chances of success and launch it
        as quickly as possible
      </BoxTitle>
      <BoxSubtitle>Inspired by lean-agile methods</BoxSubtitle>
      <Article>
        <ArticleSmallLayer>
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
    <Box>
      <BoxTitle>It is possible to combine speed and quality?</BoxTitle>
      <BoxSubtitle>
        here is the opinion of a successful startup's technical manager
      </BoxSubtitle>

      <Article>
        <ArticleXSLayer>
          <Centered>
            <Image
              style={{ height: 100, width: 100, borderRadius: 50 }}
              resizeMode="contain"
              source={require('../images/alex-hajjar.jpeg')}
            />
            <CustomText
              center
              weight="thin"
              color={CustomColor.greyLL}
              size="xs"
            >
              Alex Hajjar{'\n'}LegalStart CTO
            </CustomText>
          </Centered>
        </ArticleXSLayer>
        <ArticleMediumLayer>
          <ArticleContent>
            Xavier is able to very rapidly develop complex features and manage
            the various issues relating to a project by himself.
            {'\n'}I particularly appreciated: his timeliness, his pragmatism and
            good ideas, his clear coding and attention to detail
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
      <BoxSubtitleHr>
        4 STARTUP FOUNDERS OR CTO GIVE THEIR OPINION
      </BoxSubtitleHr>
      <Article>
        <ArticleXSLayer>
          <TestimonyContent>
            "Xavier is a great professional which specializes in mobile
            development. I am looking forward to work with him in the future
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
    <CallToAction onPress={() => openURL('mailto:xcapetir+cta@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Xavier Carpentier' }),
)(IndexPage)
