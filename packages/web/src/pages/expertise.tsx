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
import { OpenSourceBox } from '../components/shared/OpenSourceBox'

const ExpertisePage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <Box noBorder>
      <Article>
        <ArticleSmallLayer>
          <Image
            style={{ flex: 1, width: '100%' }}
            resizeMode="center"
            source={require('../images/docdok.jpg')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleTitle>Career history</ArticleTitle>
          <ArticleSubtileSmall>2014 - Ongoing</ArticleSubtileSmall>
          <ArticleContent>
            Freelance full-stack mobile developer for startups
            {'\n'}
            <CustomLink
              onPress={() => navigateTo('mobile-development-projects/docdok')}
            >
              docdok.health
            </CustomLink>
            {' - '}
            <CustomLink
              onPress={() => navigateTo('mobile-development-projects/sneat')}
            >
              sneat
            </CustomLink>
            {' - '}
            <CustomLink
              onPress={() => navigateTo('mobile-development-projects/papott')}
            >
              Papott
            </CustomLink>
            {' - '}
            <CustomLink
              href="https://www.legalstart.fr?from=xaviercarpentier.com"
              onPress={() =>
                openURL('https://www.legalstart.fr?from=xaviercarpentier.com')
              }
            >
              LegalStart
            </CustomLink>
            {' & '}
            <CustomLink
              href="https://www.avostart.fr/?from=xaviercarpentier.com"
              onPress={() =>
                openURL('https://www.avostart.fr/?from=xaviercarpentier.com')
              }
            >
              Avostart
            </CustomLink>
          </ArticleContent>
          <ArticleSubtileSmall>2010 - 2014</ArticleSubtileSmall>
          <ArticleContent>Java Web developer in a startup</ArticleContent>
          <ArticleSubtileSmall>2006 - 2010</ArticleSubtileSmall>
          <ArticleContent>
            Java Developer {'\n'}
            <CustomLink
              href="https://www.monabanq.com/fr/index.html?from=xaviercarpentier.com"
              onPress={() =>
                openURL(
                  'https://www.monabanq.com/fr/index.html?from=xaviercarpentier.com',
                )
              }
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
            <CustomLink
              onPress={() => navigateTo('react-native-mobile-developer')}
            >
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
          <ArticleContent>
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
    <OpenSourceBox {...{ navigateTo }} />
    <CallToAction
      onPress={() => openURL('mailto:xcapetir+expertise@gmail.com')}
    />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Career history' }),
)(ExpertisePage)
