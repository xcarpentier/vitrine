import * as React from 'react'
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native'
import { CustomButton } from '../customs/CustomButton'
import { CustomColor } from '../customs/CustomColor'
import { CustomText } from '../customs/CustomText'

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
  onPress(): void
}
export const NavItem = ({
  title,
  onPress,
  asButton,
  active,
  color,
}: NavItemProps) => (
  <>
    {asButton ? (
      <CustomButton {...{ title, onPress }} />
    ) : (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <CustomText
          color={getTextColor({ color, active })}
          weight={active ? 'normal' : 'thin'}
          accessibilityRole="link"
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
