import * as React from 'react'
import Player, { Props as PlayerProps } from 'rngallery-player'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import {
  withLayout,
  PageProps,
} from '../../components/higherOrderComponent/withLayout'
import { compose } from 'recompose'
import {
  Box,
  Grid,
  GridItem,
  Centered,
  CustomViewProps,
} from '../../components/common/customs/CustomView'
import {
  Article,
  ArticleSmallLayer,
  ArticleMediumLayer,
  ArticleTitle,
  ArticleSubtile,
  ArticleContent,
} from '../../components/common/ArticleContent'
import {
  CustomLink,
  CustomTextProps,
} from '../../components/common/customs/CustomText'
import {
  ListContainer,
  ListItem,
} from '../../components/common/customs/CustomList'
import { BoxSubtitleHr } from '../../components/common/customs/CustomContent'
import { CustomColor } from '../../components/common/customs/CustomColor'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { CallToAction } from '../../components/common/CallToAction'
import { GalleryBox } from '../../components/shared/GalleryBox'

const OSGridItem = ({ children, ...props }: CustomViewProps) => (
  <GridItem
    style={{
      height: 485,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      marginBottom: 50,
    }}
    {...props}
  >
    <Centered style={{ width: '100%', padding: 50 }}>{children}</Centered>
  </GridItem>
)

const OSPlayer = ({
  onPress,
  ...props
}: PlayerProps & { onPress?(event: GestureResponderEvent): void }) => (
  <TouchableOpacity {...{ onPress }}>
    <Player autoplay minWidth={190} {...props} />
  </TouchableOpacity>
)

const OSPlayerText = (props: CustomTextProps) => (
  <CustomLink
    center
    weight="thin"
    color={CustomColor.primary}
    {...props}
    style={{ marginTop: 15 }}
  />
)

const OpenSourcePage = ({ openURL }: PageProps) => (
  <>
    <Box noBorder>
      <Article>
        <ArticleSmallLayer hiddenXS>
          <OSPlayer
            gifId="HandsomeInnocentAnura"
            onPress={() =>
              openURL(
                'https://github.com/xcarpentier/react-native-country-picker-modal',
              )
            }
          />
        </ArticleSmallLayer>
        <ArticleMediumLayer>
          <ArticleSubtile>Open Source</ArticleSubtile>
          <ArticleTitle>
            My work is used by many developers worldwide
          </ArticleTitle>
          <ArticleContent>
            I continuously strive to create tools that other developers can put
            to good use. I bring special contribution to the React Native
            community – my preferred tool to rapidly create mobile applications.
            Here are some tools I developed:
            <ListContainer>
              <ListItem>
                A country selection feature integrated to forms
              </ListItem>
              <ListItem>A payment system</ListItem>
              <ListItem>
                A system allowing communication between an application and Slack
                (chat application)
              </ListItem>
            </ListContainer>
            <CustomLink
              href="https://github.com/xcarpentier"
              onPress={() => openURL('https://github.com/xcarpentier')}
            >
              Visit my Github profile
            </CustomLink>
          </ArticleContent>
        </ArticleMediumLayer>
      </Article>
    </Box>
    <Box noBorder style={{ marginBottom: 100 }}>
      <BoxSubtitleHr>Videos of my open source projects</BoxSubtitleHr>
      <Grid>
        <OSGridItem>
          <OSPlayer
            gifId="ThatSlimyBeardedcollie"
            onPress={() =>
              openURL('https://github.com/FaridSafi/react-native-gifted-chat')
            }
          />
          <OSPlayerText
            onPress={() =>
              openURL('https://github.com/FaridSafi/react-native-gifted-chat')
            }
            href="https://github.com/FaridSafi/react-native-gifted-chat"
          >
            Gifted Chat
          </OSPlayerText>
        </OSGridItem>
        <OSGridItem>
          <OSPlayer
            gifId="IlliterateSecondDassie"
            onPress={() =>
              openURL('https://github.com/xcarpentier/react-native-linkedin')
            }
          />
          <OSPlayerText
            onPress={() =>
              openURL('https://github.com/xcarpentier/react-native-linkedin')
            }
            href="https://github.com/xcarpentier/react-native-linkedin"
          >
            LinkedIn Connect
          </OSPlayerText>
        </OSGridItem>
        <OSGridItem>
          <OSPlayer
            gifId="BlueInferiorHorseshoecrab"
            onPress={() =>
              openURL('https://github.com/xcarpentier/react-native-suggester')
            }
          />
          <OSPlayerText
            onPress={() =>
              openURL('https://github.com/xcarpentier/react-native-suggester')
            }
            href="https://github.com/xcarpentier/react-native-suggester"
          >
            Suggester
          </OSPlayerText>
        </OSGridItem>
        <OSGridItem>
          <OSPlayer
            gifId="QuickAnnualFinch"
            onPress={() =>
              openURL('https://github.com/xcarpentier/rn-pdf-reader-js')
            }
          />
          <OSPlayerText
            href="https://github.com/xcarpentier/rn-pdf-reader-js"
            onPress={() =>
              openURL('https://github.com/xcarpentier/rn-pdf-reader-js')
            }
          >
            PDF reader
          </OSPlayerText>
        </OSGridItem>
        <OSGridItem>
          <OSPlayer
            gifId="FittingAromaticChimpanzee"
            onPress={() =>
              openURL('https://github.com/xcarpentier/rn-pdf-reader-js')
            }
          />
          <OSPlayerText
            href="https://github.com/xcarpentier/rn-verifcode"
            onPress={() =>
              openURL('https://github.com/xcarpentier/rn-verifcode')
            }
          >
            Verification SMS code
          </OSPlayerText>
        </OSGridItem>
      </Grid>
    </Box>
    <GalleryBox {...{ openURL }} />
    <CallToAction
      onPress={() => openURL('mailto:xcapetir+opensource@gmail.com')}
    />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({
    title: 'Open Source',
    description: 'My work is used by many developers worldwide',
  }),
)(OpenSourcePage)
