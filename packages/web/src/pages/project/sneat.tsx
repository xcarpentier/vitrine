import * as React from 'react'
import { Box } from '../../components/common/customs/CustomView'
import {
  Article,
  ArticleSmallLayer,
  ArticleMediumLayer,
  ArticleSubtile,
  ArticleTitle,
  ArticleContent,
} from '../../components/common/ArticleContent'
import { CustomLink } from '../../components/common/customs/CustomText'
import {
  ListContainer,
  ListItem,
} from '../../components/common/customs/CustomList'
import Player from 'rngallery-player'
import { Layout } from '../../components/layout'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { HtmlHeader } from '../../components/HtmlHeader'
import { CallToAction } from '../../components/common/CallToAction'

export const SneatBox = ({
  navigateTo,
  isPage,
}: Partial<AppContextType> & { isPage?: boolean }) => (
  <Box noBorder={isPage}>
    <Article>
      <ArticleSmallLayer>
        <Player gifId="AstonishingKnobbyDutchsmoushond" autoplay />
      </ArticleSmallLayer>
      <ArticleMediumLayer>
        <ArticleSubtile>sneat</ArticleSubtile>
        <ArticleTitle>
          An application for the last minute booking of the most praised
          Parisian restaurants
        </ArticleTitle>
        <ArticleContent>
          Making the most of Facebook technology (
          <CustomLink onPress={() => navigateTo!('reactnative')}>
            React Native
          </CustomLink>
          ), I have been able to develop and benefit from a fast and responsive
          application all at once. Here's what I came up with:
          <ListContainer>
            <ListItem>
              Notifications to let you know when a table is free at the
              restaurant
            </ListItem>
            <ListItem>Search by geolocation</ListItem>
            <ListItem>Highly frequent application updates</ListItem>
          </ListContainer>
        </ArticleContent>
      </ArticleMediumLayer>
    </Article>
  </Box>
)

const SneatPage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
}: AppContextType) => (
  <Layout {...{ navigateTo, currentRoute, openURL }}>
    <HtmlHeader title="sneat" />
    <SneatBox {...{ navigateTo }} isPage />
    <CallToAction onPress={() => openURL('mailto:xcapetir@gmail.com')} />
  </Layout>
)

export default withContext(SneatPage)
