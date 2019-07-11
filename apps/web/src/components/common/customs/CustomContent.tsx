import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import {
  CustomTextProps,
  Heading1,
  Heading2,
  Heading4,
  Paragraph,
} from '@vitrine/common/src/core/ui/customs/CustomText'
import { Centered } from '@vitrine/common/src/core/ui/customs/CustomView'

const styles = StyleSheet.create({
  mainTitle: {
    marginVertical: 20,
    lineHeight: 46.8,
  },
  mainIntro: {
    marginBottom: 20,
    paddingHorizontal: 10,
    lineHeight: 27,
  },
  boxTitle: {
    marginTop: 10,
    marginBottom: 25,
    lineHeight: 46.8,
  },
  boxSubtitle: {
    color: CustomColor.greyL,
    marginTop: -20,
    marginBottom: 30,
    lineHeight: 27.2,
    textTransform: 'uppercase',
  },
  boxContent: {
    marginTop: -10,
  },
  boxSubtitleHrContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: CustomColor.greyLLLL,
  },
  boxSubtitleHr: {
    padding: 10,
    top: 52,
    position: 'relative',
  },
})

export const MainTitle = (props: CustomTextProps) => (
  <Heading1
    {...props}
    center
    style={[styles.mainTitle, props.style]}
    color={CustomColor.black}
  />
)

export const BoxTitle = (props: CustomTextProps) => (
  <Heading2
    {...props}
    center
    style={[styles.boxTitle, props.style]}
    color={CustomColor.black}
  />
)

export const BoxSubtitle = (props: CustomTextProps) => (
  <Heading4
    {...props}
    center
    style={[styles.boxSubtitle, props.style]}
    color={CustomColor.black}
    weight="thin"
  />
)

export const BoxSubtitleHr = (props: CustomTextProps) => (
  <Centered style={styles.boxSubtitleHrContainer}>
    <Heading4
      {...props}
      center
      backgroundColor={CustomColor.white}
      style={[styles.boxSubtitle, styles.boxSubtitleHr, props.style]}
      color={CustomColor.greyL}
      weight="thin"
    />
  </Centered>
)

export const BoxContent = (props: CustomTextProps) => (
  <Paragraph
    center
    size="m"
    style={[styles.boxContent, props.style]}
    color={CustomColor.black}
    {...props}
  />
)

export const MainIntro = (props: CustomTextProps) => (
  <Paragraph
    {...props}
    center
    style={[styles.mainIntro, props.style]}
    color={CustomColor.black}
  />
)
