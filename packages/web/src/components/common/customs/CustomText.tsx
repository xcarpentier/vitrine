import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AccessibilityRole } from './AccessibilityRole'
import { CustomColor } from './CustomColor'
import { Omit } from './Omit'

type CustomSize = 'xs' | 's' | 'm' | 'l' | 'xl'
type CustomWeight = 'thin' | 'normal'

type CustomTextPropsBase = Omit<Text['props'], 'accessibilityRole'> & {
  accessibilityRole?: AccessibilityRole
  'aria-level'?: string
}

export interface CustomTextProps extends CustomTextPropsBase {
  color?: CustomColor
  size?: CustomSize
  center?: boolean
  children: React.ReactNode
  weight?: CustomWeight
}

const TextBase = (Text as any) as React.ComponentType<CustomTextProps>

const BaseStyle = StyleSheet.create({
  defaultStyle: {
    color: CustomColor.black,
    fontWeight: '600',
    fontFamily: 'Open Sans',
    lineHeight: 20,
    WebkitFontSmoothing: 'antialiased',
  },
  link: {
    textDecorationLine: 'underline',
  },
})

const calculateFontSize = (size?: CustomSize): number => {
  switch (size) {
    case 'xs': {
      return 12
    }
    case 's': {
      return 14
    }
    case 'm': {
      return 16
    }
    case 'l': {
      return 25
    }
    case 'xl': {
      return 36
    }
    default: {
      return 16
    }
  }
}

export const CustomText = ({
  color,
  size,
  style,
  center,
  weight,
  ...props
}: CustomTextProps) => (
  <TextBase
    style={[
      BaseStyle.defaultStyle,
      {
        color,
        fontSize: calculateFontSize(size),
        lineHeight: calculateFontSize(size) * 1.5,
      },
      center ? { textAlign: 'center' } : { textAlign: 'left' },
      weight && { fontWeight: weight === 'normal' ? '600' : '400' },
      style,
    ]}
    {...props}
  />
)

export const Heading1 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    weight="normal"
    size="xl"
    {...props}
  />
)

export const Heading2 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    aria-level="2"
    weight="normal"
    size="l"
    {...props}
  />
)

export const Paragraph = (props: CustomTextProps) => (
  <CustomText weight="thin" size="m" {...props} />
)

export const CustomLink = (props: CustomTextProps) => (
  <TouchableOpacity onPress={props.onPress} accessibilityRole="link">
    <CustomText
      weight="thin"
      size="m"
      color={CustomColor.primary}
      style={[BaseStyle.link, props.style]}
      {...props}
    />
  </TouchableOpacity>
)
