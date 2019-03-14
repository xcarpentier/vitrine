import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from './common/customs/CustomColor'
import { CustomText } from './common/customs/CustomText'
import { CustomView, Main } from './common/customs/CustomView'
import { Footer, Nav } from './common/nav/Nav'
import { FootItem, NavItem, NavItemContainer } from './common/nav/NavItem'
import { NavLogo } from './common/nav/NavLogo'
import { RouteName } from '@vitrine/common/src/core/domain/gateways/RouteName'
import { HtmlHeader } from './HtmlHeader'

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
  title?: string
  pathname?: string
  navigateTo(routeName: RouteName, params?: any): void
  openURL(url: string): void
}

export const Layout = ({
  navigateTo,
  children,
  openURL,
  title,
  pathname,
}: LayoutProps) => (
  <>
    <HtmlHeader {...{ title }} />
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
        <NavItem
          active={pathname === '/'}
          title="Home"
          onPress={() => navigateTo('/')}
          href="/"
        />
        <NavItem
          active={pathname!.startsWith('project')}
          title="Project"
          onPress={() => navigateTo('project')}
          href="/project"
        />
        <NavItem
          active={pathname!.startsWith('expertise')}
          title="Expertise"
          onPress={() => navigateTo('expertise')}
          href="/expertise"
        />
        <NavItem
          title="Contact me!"
          onPress={() => openURL('mailto:xcapetir+nav@gmail.com')}
          asButton
        />
      </NavItemContainer>
    </Nav>
    <CustomView center style={styles.main}>
      <Main>{children}</Main>
      <Footer>
        <FootItem
          title="Twitter"
          onPress={() => openURL('https://twitter.com/xcapetir')}
        />
        <FootItem
          title="LinkedIn"
          onPress={() =>
            openURL(
              'https://www.linkedin.com/in/carpentierxavier/?locale=en_US',
            )
          }
        />
        <FootItem
          title="GitHub"
          onPress={() => openURL('https://github.com/xcarpentier')}
        />
      </Footer>
    </CustomView>
  </>
)
