import * as React from 'react'
import { StyleSheet, Image } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import { CustomText } from '@vitrine/common/src/core/ui/customs/CustomText'
import {
  CustomView,
  Main,
  HiddenXS,
  VisibleXS,
} from '@vitrine/common/src/core/ui/customs/CustomView'
import { Footer, Nav } from './common/nav/Nav'
import { FootItem, NavItem, NavItemContainer } from './common/nav/NavItem'
import { NavLogo } from './common/nav/NavLogo'
import { RouteName } from '@vitrine/common/src/core/domain/gateways/RouteName'
import { HtmlHeader, HtmlHeaderProps } from './HtmlHeader'

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

interface LayoutProps extends HtmlHeaderProps {
  children: React.ReactNode
  title?: string
  pathname?: string
  currentRoute?: RouteName
  navigateTo(routeName: RouteName, params?: any): void
  openURL(url: string): void
}

const isActive = ({
  pathname,
  currentRoute,
  routeToTest,
}: Partial<LayoutProps> & { routeToTest: string }) => {
  return (
    (!!pathname && pathname === routeToTest) ||
    (!!currentRoute && currentRoute === routeToTest) ||
    (!!currentRoute && currentRoute.startsWith(routeToTest))
  )
}

export const Layout = ({
  navigateTo,
  children,
  openURL,
  title,
  pathname,
  currentRoute,
  description,
}: LayoutProps) => (
  <>
    <HtmlHeader {...{ title, description }} />
    <HiddenXS>
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
            active={isActive({ pathname, currentRoute, routeToTest: '/' })}
            title="Home"
            onPress={() => navigateTo('/')}
            href="/"
          />
          <NavItem
            active={isActive({
              pathname,
              currentRoute,
              routeToTest: 'mobile-development-projects',
            })}
            title="Projects"
            onPress={() => navigateTo('mobile-development-projects')}
            href="/mobile-development-projects"
          />
          <NavItem
            active={isActive({
              pathname,
              currentRoute,
              routeToTest: 'expertise',
            })}
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
    </HiddenXS>
    <VisibleXS center>
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginBottom: -100,
        }}
        source={require('../images/me-5.jpg')}
      />
    </VisibleXS>
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
      </Footer>
      <VisibleXS center>
        <FootItem title="Expertise" onPress={() => navigateTo('expertise')} />
        <FootItem
          title="Projects"
          onPress={() => navigateTo('mobile-development-projects')}
        />
      </VisibleXS>
    </CustomView>
  </>
)
