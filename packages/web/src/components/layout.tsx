import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { CustomColor } from './common/customs/CustomColor'
import { CustomText } from './common/customs/CustomText'
import { CustomView, Main } from './common/customs/CustomView'
import { Footer, Nav } from './common/nav/Nav'
import { FootItem, NavItem, NavItemContainer } from './common/nav/NavItem'
import { NavLogo } from './common/nav/NavLogo'
import { RouteName } from '@vitrine/common/src/navigationcontext/domain/gateways/Navigation.interactor'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 130,
  },
  logo: {
    paddingHorizontal: 12,
  },
})

interface LayoutProps {
  children: React.ReactNode
  navigateTo(routeName: RouteName, params?: any): void
}

export const Layout = ({ navigateTo, children }: LayoutProps) => (
  <ScrollView>
    <Nav>
      <NavLogo onPress={() => navigateTo('/')}>
        <CustomText
          style={styles.logo}
          backgroundColor={CustomColor.whiteT}
          color={CustomColor.blackL}
          weight="thin"
        >
          XAVIER CARPENTIER
        </CustomText>
      </NavLogo>
      <NavItemContainer>
        <NavItem title="Home" onPress={() => navigateTo('/')} />
        <NavItem title="Project" onPress={() => navigateTo('project')} />
        <NavItem title="Expertise" onPress={() => navigateTo('expertise')} />
        <NavItem
          title="Contact me!"
          onPress={() => navigateTo('contact')}
          asButton
        />
      </NavItemContainer>
    </Nav>
    <CustomView center style={styles.main}>
      <Main>{children}</Main>
      <Footer>
        <FootItem title="Twitter" onPress={() => navigateTo('expertise')} />
        <FootItem title="LinkedIn" onPress={() => navigateTo('expertise')} />
        <FootItem title="GitHub" onPress={() => navigateTo('expertise')} />
      </Footer>
    </CustomView>
  </ScrollView>
)
