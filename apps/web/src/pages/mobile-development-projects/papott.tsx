import * as React from 'react'
import { Box } from '@vitrine/common/src/core/ui/customs/CustomView'
import {
  Article,
  ArticleSmallLayer,
  ArticleMediumLayer,
  ArticleSubtile,
  ArticleTitle,
  ArticleContent,
} from '../../components/common/ArticleContent'
import { CustomLink } from '@vitrine/common/src/core/ui/customs/CustomText'
import {
  ListContainer,
  ListItem,
} from '../../components/common/customs/CustomList'
import Player from 'rngallery-player'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { HtmlHeader } from '../../components/HtmlHeader'
import { TestimonyAuthor } from '../../components/common/Testimony'
import { CallToAction } from '../../components/common/CallToAction'
import {
  PageProps,
  withLayout,
} from '../../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'

export const PapottBox = ({
  isPage,
  openURL,
}: Pick<PageProps, 'openURL'> & {
  isPage?: boolean
}) => (
  <>
    <Box noBorder={isPage}>
      <Article>
        <ArticleMediumLayer>
          <ArticleSubtile>papott</ArticleSubtile>
          <ArticleTitle>
            Development of a mobile application in 9 days
          </ArticleTitle>
          <ArticleContent>
            This customer needed me to rapidly build a prototype to undergo
            market testing. Owing to my 10 years of experience as a developer, I
            managed it! Here's what I was able to draw up:
            <ListContainer>
              <ListItem>
                A geolocation feature that allows you to see people around you,
                even if their app is offline
              </ListItem>
              <ListItem>Uploading a profile picture</ListItem>
            </ListContainer>
            If you have 5 minutes, feel free to download the app{' '}
            <CustomLink
              onPress={() =>
                openURL(
                  'https://play.google.com/store/apps/details?id=com.vitmaxmobileapp',
                )
              }
            >
              Android
            </CustomLink>
            .
          </ArticleContent>
        </ArticleMediumLayer>
        <ArticleSmallLayer hiddenXS>
          <Player gifId="AlarmedCapitalBoubou" autoplay />
        </ArticleSmallLayer>
      </Article>
    </Box>
    <Box>
      <Article>
        <ArticleSmallLayer center hiddenXS>
          <TestimonyAuthor
            size="l"
            source={require('../../images/maxime-vitrey.jpg')}
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleTitle>Customer feedback</ArticleTitle>
          <ArticleSubtile>Maxime Vitrey</ArticleSubtile>
          <ArticleContent>
            "I needed to rapidly create an application. Xavier outreached my
            expectations by creating it in record time!"
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>
  </>
)

const PapottPage = ({ openURL }: PageProps) => (
  <>
    <HtmlHeader />
    <PapottBox isPage {...{ openURL }} />
    <CallToAction onPress={() => openURL('mailto:xcapetir+papott@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({
    title: 'Papott',
    description: 'Development of a mobile application in 9 days',
  }),
)(PapottPage)
