import * as React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  GestureResponderEvent,
} from 'react-native'
import { CustomButton } from '../customs/CustomButton'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import { CustomText } from '@vitrine/common/src/core/ui/customs/CustomText'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 11.2,
  },
})

interface NavItemContainerProps extends ViewProps {
  children: React.ReactNode
}
export const NavItemContainer = (props: NavItemContainerProps) => (
  <View style={styles.container} {...props} />
)

const getTextColor = ({
  color,
  active,
}: {
  color?: CustomColor
  active?: boolean
}): CustomColor => {
  if (color) {
    return color
  }
  return active ? CustomColor.primary : CustomColor.blackL
}

interface NavItemProps {
  title: string
  color?: CustomColor
  externalLink?: string
  asButton?: boolean
  active?: boolean
  href?: string
  onPress(): void
}
export const NavItem = ({
  title,
  onPress,
  asButton,
  active,
  color,
  href,
}: NavItemProps) => (
  <>
    {asButton ? (
      <CustomButton {...{ title, onPress, href }} />
    ) : (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <CustomText
          {...{ href }}
          color={getTextColor({ color, active })}
          weight={active ? 'normal' : 'thin'}
          accessibilityRole="link"
          onPress={(e: GestureResponderEvent) => {
            e.preventDefault()
            return false
          }}
        >
          {title}
        </CustomText>
      </TouchableOpacity>
    )}
  </>
)

export const FootItem = (props: NavItemProps) => (
  <NavItem color={CustomColor.greyL} {...props} />
)
