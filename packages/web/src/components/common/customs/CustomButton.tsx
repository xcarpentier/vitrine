import * as React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { CustomColor } from './CustomColor'
import { CustomText } from './CustomText'

interface CustomButtonProps extends TouchableOpacityProps {
  title: string
  size?: 'm' | 'l'
}

const BaseStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: CustomColor.primary,
    borderColor: CustomColor.primaryD,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  large: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
})

export const CustomButton = ({
  title,
  style,
  size,
  ...props
}: CustomButtonProps) => (
  <TouchableOpacity
    style={[
      BaseStyle.container,
      size === 'l' ? BaseStyle.large : undefined,
      style,
    ]}
    {...props}
    accessible
    accessibilityRole="button"
  >
    <CustomText
      color={CustomColor.white}
      weight="thin"
      size={size === 'l' ? 'm' : 's'}
    >
      {title}
    </CustomText>
  </TouchableOpacity>
)
