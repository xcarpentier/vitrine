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
import { Layout } from '../../components/layout'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { HtmlHeader } from '../../components/HtmlHeader'
import { TestimonyAuthor } from '../../components/common/Testimony'
import { CallToAction } from '../../components/common/CallToAction'

export const DocdokBox = ({ isPage }: { isPage?: boolean }) => (
  <>
    <Box noBorder={isPage}>
      <Article>
        <ArticleSmallLayer>
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
                alert('https://itunes.apple.com/de/app/id1294250987?l=de')
              }
            >
              iOS
            </CustomLink>{' '}
            or{' '}
            <CustomLink
              onPress={() =>
                alert(
                  'https://play.google.com/store/apps/details?id=ch.emedicus.docdok.health',
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
            "Xavier is a great professional which specializes in mobile
            development. I am looking forward to work with him in the future
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

const DocdokPage = ({
  navigateTo,
  currentRoute,
  navigationInteractor: { openURL },
}: AppContextType) => (
  <Layout {...{ navigateTo, currentRoute, openURL }}>
    <HtmlHeader title="sneat" />
    <DocdokBox isPage />
    <CallToAction onPress={() => openURL('mailto:xcapetir@gmail.com')} />
  </Layout>
)

export default withContext(DocdokPage)
