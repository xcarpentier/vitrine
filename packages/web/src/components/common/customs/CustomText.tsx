import * as React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'
import { AccessibilityRole } from './AccessibilityRole'
import { CustomColor } from './CustomColor'
import { Omit } from './Omit'

type CustomSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
type CustomWeight = 'thin' | 'normal'

type CustomTextPropsBase = Omit<Text['props'], 'accessibilityRole'> & {
  accessibilityRole?: AccessibilityRole
  'aria-level'?: string
}

export interface CustomTextProps extends CustomTextPropsBase {
  color?: CustomColor
  backgroundColor?: CustomColor
  size?: CustomSize
  center?: boolean
  children: React.ReactNode
  weight?: CustomWeight
  href?: string
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
      return 20
    }
    case 'xl': {
      return 25
    }
    case 'xxl': {
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
  backgroundColor,
  ...props
}: CustomTextProps) => (
  <TextBase
    style={[
      BaseStyle.defaultStyle,
      {
        color,
        backgroundColor,
        fontSize: calculateFontSize(size),
        lineHeight: calculateFontSize(size) * 1.5,
      },
      center ? { textAlign: 'center' } : { textAlign: 'left' },
      { fontWeight: weight === 'normal' ? '600' : '400' },
      style,
    ]}
    {...props}
  />
)

export const Heading1 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    weight="normal"
    size="xxl"
    {...props}
  />
)

export const Heading2 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    aria-level="2"
    weight="normal"
    size="xl"
    {...props}
  />
)

export const Heading3 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    aria-level="3"
    weight="normal"
    size="l"
    {...props}
  />
)

export const Heading4 = (props: CustomTextProps) => (
  <CustomText
    accessibilityRole="heading"
    aria-level="4"
    weight="normal"
    size="m"
    {...props}
  />
)

export const Paragraph = (props: CustomTextProps) => (
  <CustomText weight="thin" size="m" {...props} />
)

export const CustomLink = (props: CustomTextProps & { href?: string }) => (
  <TouchableOpacity onPress={props.onPress} accessibilityRole="link">
    <CustomText
      weight="thin"
      size="m"
      color={CustomColor.primary}
      style={[BaseStyle.link, props.style]}
      {...props}
      onPress={(e: GestureResponderEvent) => {
        e.preventDefault()
        return false
      }}
    />
  </TouchableOpacity>
)
