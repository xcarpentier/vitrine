import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import {
  CustomTextProps,
  Heading2,
  Paragraph,
  Heading4,
} from '@vitrine/common/src/core/ui/customs/CustomText'
import {
  CustomView,
  CustomViewProps,
} from '@vitrine/common/src/core/ui/customs/CustomView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleTitle: {
    marginBottom: 14,
  },
  articleSubtitle: {
    textTransform: 'uppercase',
  },
  articleContent: {
    marginBottom: 14,
  },
  layer: {
    padding: 5,
  },
  medium: {
    width: '65%',
  },
  small: {
    width: '35%',
  },
  large: {
    width: '80%',
  },
  xs: {
    width: '20%',
  },
})

export const Article = (props: CustomViewProps) => (
  <CustomView
    accessibilityRole="article"
    justify="center"
    fullWidth
    style={styles.container}
    direction="row"
    wrap="wrap"
    {...props}
  />
)

export const ArticleMediumLayer = (props: CustomViewProps) => (
  <CustomView style={[styles.layer, styles.medium, props.style]} {...props} />
)

export const ArticleLargeLayer = (props: CustomViewProps) => (
  <CustomView style={[styles.layer, styles.large, props.style]} {...props} />
)

export const ArticleSmallLayer = (props: CustomViewProps) => (
  <CustomView style={[styles.layer, styles.small, props.style]} {...props} />
)

export const ArticleXSLayer = (props: CustomViewProps) => (
  <CustomView style={[styles.layer, styles.xs, props.style]} {...props} />
)

export const ArticleTitle = (props: CustomTextProps) => (
  <Heading2
    {...props}
    style={[styles.articleTitle, props.style]}
    color={CustomColor.black}
  />
)

export const ArticleSubtile = (props: CustomTextProps) => (
  <Heading4
    {...props}
    style={[styles.articleSubtitle, props.style]}
    color={CustomColor.greyLL}
    weight="thin"
  />
)

export const ArticleSubtileSmall = (props: CustomTextProps) => (
  <ArticleSubtile {...props} size="xs" />
)

export const ArticleContent = (props: CustomTextProps) => (
  <Paragraph
    {...props}
    size="m"
    style={[styles.articleContent, props.style]}
    color={CustomColor.black}
  />
)
