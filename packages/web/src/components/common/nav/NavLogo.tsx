import * as React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

const styles = StyleSheet.create({
  navLogo: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 11.2,
    alignSelf: 'flex-start',
  },
})

interface NavLogoProps extends TouchableOpacityProps {
  children: React.ReactNode
}
export const NavLogo = (props: NavLogoProps) => (
  <TouchableOpacity
    style={styles.navLogo}
    accessible
    accessibilityRole="link"
    {...props}
  />
)
