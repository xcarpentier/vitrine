import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import {
  CustomView,
  CustomViewProps,
} from '@vitrine/common/src/core/ui/customs/CustomView'

const styles = StyleSheet.create({
  nav: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
    bottom: undefined,
    height: 70,
    padding: 10,
    backgroundColor: CustomColor.whiteT,
    borderBottomColor: CustomColor.greyLLLL,
    borderBottomWidth: 1,
    zIndex: 4,
  },
  footer: {
    top: undefined,
    bottom: 0,
    borderBottomWidth: 0,
    height: 81,
    padding: 21,
  },
  footerContainer: {
    maxWidth: 800,
  },
})

const NavContainer = (props: CustomViewProps) => (
  <CustomView
    style={[styles.nav, props.style]}
    {...props}
    accessibilityRole="navigation"
  />
)

const NavContentContainer = (props: CustomViewProps) => (
  <CustomView
    type="constrained"
    direction="row"
    justify="space-evenly"
    align="center"
    wrap="wrap-reverse"
    style={[props.style]}
    {...props}
  />
)

interface NavProps extends CustomViewProps {
  children: React.ReactNode
}
export const Nav = (props: NavProps) => (
  <NavContainer>
    <NavContentContainer>{props.children}</NavContentContainer>
  </NavContainer>
)

export const Footer = (props: NavProps) => (
  <NavContainer center style={[styles.footer, props.style]}>
    <NavContentContainer center style={styles.footerContainer}>
      {props.children}
    </NavContentContainer>
  </NavContainer>
)
