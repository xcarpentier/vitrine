import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from './customs/CustomColor'
import { CustomTextProps, Heading2, Paragraph } from './customs/CustomText'
import { CustomView, CustomViewProps } from './customs/CustomView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleTitle: {
    marginBottom: 14,
  },
  articleContent: {
    marginBottom: 14,
  },
  layer: {
    minWidth: 200,
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

export const ArticleContent = (props: CustomTextProps) => (
  <Paragraph
    {...props}
    size="m"
    style={[styles.articleContent, props.style]}
    color={CustomColor.black}
  />
)
