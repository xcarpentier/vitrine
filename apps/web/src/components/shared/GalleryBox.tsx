import * as React from 'react'
import { Box } from '@vitrine/common/src/core/ui/customs/CustomView'
import {
  Article,
  ArticleMediumLayer,
  ArticleTitle,
  ArticleContent,
  ArticleSmallLayer,
} from '../common/ArticleContent'
import {
  CustomLink,
  CustomText,
} from '@vitrine/common/src/core/ui/customs/CustomText'
import { Image, TouchableOpacity } from 'react-native'
import { PageProps } from '../higherOrderComponent/withLayout'

export const GalleryBox = ({ openURL }: Pick<PageProps, 'openURL'>) => (
  <Box>
    <Article>
      <ArticleMediumLayer>
        <ArticleTitle>Show and tell for React Native developers</ArticleTitle>
        <ArticleContent>
          I take part in the React Native developers community by providing
          helps services like{' '}
          <CustomText weight="normal">React Native Gallery</CustomText> website.
        </ArticleContent>
        <CustomLink
          onPress={() => openURL('https://reactnative.gallery/')}
          href="https://reactnative.gallery/"
        >
          Find out more
        </CustomLink>
      </ArticleMediumLayer>
      <ArticleSmallLayer hiddenXS>
        <TouchableOpacity
          onPress={() => openURL('https://reactnative.gallery/')}
          style={{ flex: 1, width: '100%' }}
        >
          <Image
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
            source={require('../../images/gallery.png')}
          />
        </TouchableOpacity>
      </ArticleSmallLayer>
    </Article>
  </Box>
)
