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

interface NavItemProps {
  title: string
  color?: CustomColor
  externalLink?: string
  asButton?: boolean
  onPress(): void
}
export const NavItem = ({ title, onPress, asButton, color }: NavItemProps) => (
  <>
    {asButton ? (
      <CustomButton {...{ title, onPress }} />
    ) : (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <CustomText
          color={color ? color : CustomColor.blackL}
          weight="thin"
          accessible
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
