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
import Player from 'rngallery-player'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { TestimonyAuthor } from '../../components/common/Testimony'
import { CallToAction } from '../../components/common/CallToAction'

import { compose } from 'recompose'
import {
  PageProps,
  withLayout,
} from '../../components/higherOrderComponent/withLayout'

export const DocdokBox = ({
  isPage,
  openURL,
}: Pick<PageProps, 'openURL'> & { isPage?: boolean }) => (
  <>
    <Box noBorder={isPage}>
      <Article>
        <ArticleSmallLayer hiddenXS>
          <Player gifId="TemptingTimelyBeauceron" autoplay />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleSubtile>docdok.health</ArticleSubtile>
          <ArticleTitle>
            A platform for communication between doctors and patients.
          </ArticleTitle>

          <ArticleContent>
            The core of the docdok.health application is a direct and secure
            communication channel through which patients can communicate with
            their doctors. I took care of the development of the mobile
            application in its entirety as well as the implementation of the
            build chain with a high quality constraint. See app iOS or Android.
            {'\n'}
            {'\n'}
            See app{' '}
            <CustomLink
              onPress={() =>
                openURL('https://itunes.apple.com/de/app/id1294250987?l=de')
              }
            >
              iOS
            </CustomLink>{' '}
            or{' '}
            <CustomLink
              onPress={() =>
                openURL(
                  'https://play.google.com/store/apps/details?id=ch.health.docdok',
                )
              }
            >
              Android
            </CustomLink>
            .
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box>
      <Article>
        <ArticleMediumLayer>
          <ArticleTitle>Customer feedback</ArticleTitle>
          <ArticleSubtile>Tomi Schütz</ArticleSubtile>
          <ArticleContent>
            "Xavier is a great professional who specializes in mobile
            development. I am looking forward to working with him in the future
            again."
          </ArticleContent>
        </ArticleMediumLayer>
        <ArticleSmallLayer center>
          <TestimonyAuthor
            size="l"
            source={require('../../images/tomi-schutz.jpg')}
          />
        </ArticleSmallLayer>
      </Article>
    </Box>
  </>
)

const DocdokPage = ({ openURL }: PageProps) => (
  <>
    <DocdokBox isPage {...{ openURL }} />
    <CallToAction onPress={() => openURL('mailto:xcapetir@gmail.com')} />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({
    title: 'docdok.health',
    description: 'A platform for communication between doctors and patients.',
  }),
)(DocdokPage)
