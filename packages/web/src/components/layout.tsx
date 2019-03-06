import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from './common/customs/CustomColor'
import { CustomText } from './common/customs/CustomText'
import { CustomView, Main } from './common/customs/CustomView'
import { Footer, Nav } from './common/nav/Nav'
import { FootItem, NavItem, NavItemContainer } from './common/nav/NavItem'
import { NavLogo } from './common/nav/NavLogo'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 130,
  },
})

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Nav>
      <NavLogo onPress={() => alert('home')}>
        <CustomText color={CustomColor.blackL} weight="thin">
          XAVIER CARPENTIER
        </CustomText>
      </NavLogo>
      <NavItemContainer>
        <NavItem title="Home" onPress={() => alert('home')} />
        <NavItem title="Project" onPress={() => alert('project')} />
        <NavItem title="Expertise" onPress={() => alert('expertise')} />
        <NavItem
          title="Contact me!"
          onPress={() => alert('contact')}
          asButton
        />
      </NavItemContainer>
    </Nav>
    <CustomView center style={styles.main}>
      <Main>{children}</Main>
      <Footer>
        <FootItem title="Twitter" onPress={() => alert('expertise')} />
        <FootItem title="LinkedIn" onPress={() => alert('expertise')} />
        <FootItem title="GitHub" onPress={() => alert('expertise')} />
      </Footer>
    </CustomView>
  </>
)
