import * as React from 'react'
import { Box } from '../common/customs/CustomView'
import {
  Article,
  ArticleMediumLayer,
  ArticleTitle,
  ArticleContent,
  ArticleSmallLayer,
} from '../common/ArticleContent'
import { CustomLink } from '../common/customs/CustomText'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { Image, TouchableOpacity } from 'react-native'

export const OpenSourceBox = ({
  navigateTo,
}: Pick<AppContextType, 'navigateTo'>) => (
  <Box>
    <Article>
      <ArticleMediumLayer>
        <ArticleTitle>
          My work is used by{'\n'}thousands of developers worldwide
        </ArticleTitle>
        <ArticleContent>
          I take part in improving React Native technology and am involved in
          the all community.
        </ArticleContent>
        <CustomLink
          onPress={() => navigateTo('mobile-development-projects/opensource')}
          href="/mobile-development-projects/opensource"
        >
          Find out more
        </CustomLink>
      </ArticleMediumLayer>
      <ArticleSmallLayer>
        <TouchableOpacity
          style={{ flex: 1, width: '100%' }}
          onPress={() => navigateTo('mobile-development-projects/opensource')}
        >
          <Image
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
            source={require('../../images/choix-pays.jpg')}
          />
        </TouchableOpacity>
      </ArticleSmallLayer>
    </Article>
  </Box>
)
