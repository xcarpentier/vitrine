import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from './CustomColor'
import { CustomTextProps, Heading1, Heading2, Paragraph } from './CustomText'

const styles = StyleSheet.create({
  mainTitle: {
    marginVertical: 20,
    textAlign: 'center',
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
    textAlign: 'center',
    lineHeight: 46.8,
  },
  boxContent: {
    marginTop: -10,
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

export const BoxContent = (props: CustomTextProps) => (
  <Paragraph
    {...props}
    center
    size="m"
    style={[styles.boxContent, props.style]}
    color={CustomColor.black}
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
