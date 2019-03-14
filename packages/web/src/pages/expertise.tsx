import * as React from 'react'
import { CallToAction } from '../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import {
  Article,
  ArticleMediumLayer,
  ArticleTitle,
  ArticleContent,
  ArticleSmallLayer,
  ArticleSubtileSmall,
} from '../components/common/ArticleContent'
import { Image } from 'react-native'
import { CustomLink } from '../components/common/customs/CustomText'
import { Box } from '../components/common/customs/CustomView'
import { compose } from 'recompose'
import {
  PageProps,
  withLayout,
} from '../components/higherOrderComponent/withLayout'

const ExpertisePage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <Box noBorder>
      <Article>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '90%' }}
            resizeMode="center"
            source={require('../images/papott.jpg')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleTitle>Career history</ArticleTitle>
          <ArticleSubtileSmall>2014 - Ongoing</ArticleSubtileSmall>
          <ArticleContent style={{ minWidth: 510 }}>
            Freelance full-stack mobile developer for startups
            {'\n'}
            <CustomLink onPress={() => navigateTo('project/papott')}>
              Papott
            </CustomLink>
            {' - '}
            <CustomLink onPress={() => navigateTo('project/sneat')}>
              sneat
            </CustomLink>
            {' - '}
            <CustomLink onPress={() => navigateTo('project/docdok')}>
              docdok.health
            </CustomLink>
            {' - '}
            <CustomLink onPress={() => navigateTo('project/docdok')}>
              LegalStart & Avostart
            </CustomLink>
          </ArticleContent>
          <ArticleSubtileSmall>2010 - 2014</ArticleSubtileSmall>
          <ArticleContent>Java Web developer in a startup</ArticleContent>
          <ArticleSubtileSmall>2006 - 2010</ArticleSubtileSmall>
          <ArticleContent>
            Java Developer {'\n'}
            <CustomLink
              onPress={() => alert('https://www.monabanq.com/fr/index.html')}
            >
              monabanq., online bank
            </CustomLink>
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box>
      <Article>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '90%' }}
            resizeMode="contain"
            source={require('../images/react.svg')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleTitle>Skills</ArticleTitle>
          <ArticleSubtileSmall>mobile</ArticleSubtileSmall>
          <ArticleContent>
            <CustomLink onPress={() => navigateTo('reactnative')}>
              React-Native
            </CustomLink>
            {' - '}
            Expo - Detox - AWS Device Farm - fastlane - xcode - TestFlight -
            Appium
          </ArticleContent>
          <ArticleSubtileSmall>Frontend</ArticleSubtileSmall>
          <ArticleContent>
            Functional Reactive Programming - React - Webpack - Redux - Redux
            Saga - Ramda - High Order Component - Babel - Jest - ESlint
          </ArticleContent>
          <ArticleSubtileSmall>Back-end</ArticleSubtileSmall>
          <ArticleContent>
            RESTful - Expressjs - Play Framework - Ruby On Rails - Django -
            ElasticSearch - MongoDB - Redis - Postgresql - Firebase
          </ArticleContent>
          <ArticleSubtileSmall>Languages</ArticleSubtileSmall>
          <ArticleContent>
            JavaScript ES6 - Scala - Java - Ruby - Python - CoffeeScript -
            Groovy - TypeScript - ReasonML
          </ArticleContent>
          <ArticleSubtileSmall>Infrastructure</ArticleSubtileSmall>
          <ArticleContent>
            Heroku - AWS - Docker - DigitalOcean - Ansible - Kubernetes
          </ArticleContent>
          <ArticleSubtileSmall>
            Source code, Project management
          </ArticleSubtileSmall>
          <ArticleContent>
            GitHub - JIRA - CircleCi - TravisCI - Jenkins
          </ArticleContent>
          <ArticleSubtileSmall>System</ArticleSubtileSmall>
          <ArticleContent>Unix, Linux, Mac - Shell script</ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box>
      <Article>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '90%' }}
            resizeMode="contain"
            source={require('../images/competences.png')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleTitle>Professional training</ArticleTitle>
          <ArticleSubtileSmall>2014</ArticleSubtileSmall>
          <ArticleContent>
            Ruby
            {'\n'}
            Human coders
          </ArticleContent>
          <ArticleSubtileSmall>2014</ArticleSubtileSmall>
          <ArticleContent style={{ minWidth: 510 }}>
            Certification AngularJS
            {'\n'}
            SFEIR School
          </ArticleContent>
          <ArticleSubtileSmall>2012</ArticleSubtileSmall>
          <ArticleContent>
            Functional programming with Scala
            {'\n'}
            Coursera & EPFL
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>

    <CallToAction
      onPress={() => openURL('mailto:xcapetir+expertise@gmail.com')}
    />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Career history' }),
)(ExpertisePage)
