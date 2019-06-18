import * as React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Platform,
} from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import { CustomText } from '@vitrine/common/src/core/ui/customs/CustomText'

interface CustomButtonProps extends TouchableOpacityProps {
  title: string
  size?: 'm' | 'l'
  href?: string
}

const BaseStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Platform.select({
      default: CustomColor.primary,
      web: undefined,
    }),
    backgroundImage: Platform.select({
      default: undefined,
      web: `linear-gradient(to right, ${CustomColor.primaryDD}, ${CustomColor.primary})`,
    }),
    borderColor: CustomColor.primaryD,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  large: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
})

export const CustomButton = ({
  title,
  style,
  size,
  href,
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
      {...{ href }}
      color={CustomColor.white}
      weight="thin"
      size={size === 'l' ? 'm' : 's'}
    >
      {title}
    </CustomText>
  </TouchableOpacity>
)
