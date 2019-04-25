import * as React from 'react'
import { Box, HiddenXS } from '../../components/common/customs/CustomView'
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
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { HtmlHeader } from '../../components/HtmlHeader'
import { CallToAction } from '../../components/common/CallToAction'
import {
  PageProps,
  withLayout,
} from '../../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'

export const SneatBox = ({
  navigateTo,
  isPage,
}: Pick<PageProps, 'navigateTo'> & { isPage?: boolean }) => (
  <Box noBorder={isPage}>
    <Article>
      <HiddenXS>
        <ArticleSmallLayer>
          <Player gifId="AstonishingKnobbyDutchsmoushond" autoplay />
        </ArticleSmallLayer>
      </HiddenXS>
      <ArticleMediumLayer>
        <ArticleSubtile>sneat</ArticleSubtile>
        <ArticleTitle>
          An application for the last minute booking of the most praised
          Parisian restaurants
        </ArticleTitle>
        <ArticleContent>
          Making the most of Facebook technology (
          <CustomLink
            href="/react-native-mobile-developer"
            onPress={() => navigateTo('react-native-mobile-developer')}
          >
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

const SneatPage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <HtmlHeader title="sneat" />
    <SneatBox {...{ navigateTo, openURL }} isPage />
    <CallToAction onPress={() => openURL('mailto:xcapetir+sneat@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({
    title: 'sneat',
    description:
      'An application for the last minute booking of the most praised Parisian restaurants',
  }),
)(SneatPage)
