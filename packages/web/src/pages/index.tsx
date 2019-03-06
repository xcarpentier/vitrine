import * as React from 'react'
import { Image } from 'react-native'
import { CustomButton } from '../components/common/customs/CustomButton'
import {
  BoxContent,
  BoxTitle,
  MainIntro,
  MainTitle,
} from '../components/common/customs/CustomContent'
import { CustomLink, CustomText } from '../components/common/customs/CustomText'
import {
  Box,
  Grid,
  GridItem,
  MainHead,
} from '../components/common/customs/CustomView'
import { HtmlHeader } from '../components/HtmlHeader'
import { Layout } from '../components/layout'

const IndexPage = () => (
  <Layout>
    <HtmlHeader title="Xavier Carpentier" />
    <MainHead>
      <MainTitle>Need to quickly develop a high-end mobile app?</MainTitle>
      <MainIntro>
        Benefit from my expertise and selection of solutions to equip yourself
        with a native iOS and Android application - faster than traditional
        mobile development. All this with great quality, drawing on my 10 years
        of experience.
      </MainIntro>
      <CustomButton
        size="l"
        title="Contact me!"
        onPress={() => alert('contact me')}
      />
    </MainHead>
    <Box>
      <BoxTitle>Some Success Stories</BoxTitle>
      <BoxContent>
        Making the most of Facebook technology (
        <CustomLink>React Native</CustomLink>), I have been able to develop and
        benefit from a fast and responsive application all at once. Here's what
        I came up with:
      </BoxContent>
      <Grid>
        <GridItem>
          <Image
            source={require('../images/papott.jpg')}
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText>9 days to develop an application</CustomText>
        </GridItem>
        <GridItem>
          <Image
            source={require('../images/sneat.jpg')}
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText>App with notification & payment</CustomText>
        </GridItem>
        <GridItem>
          <Image
            source={require('../images/docdok.jpg')}
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText>
            A platform for communication between doctors and patients.
          </CustomText>
        </GridItem>
        <GridItem>
          <Image
            source={require('../images/papott.jpg')}
            style={{ flex: 1, width: '100%' }}
            resizeMode="contain"
          />
          <CustomText>1</CustomText>
        </GridItem>
      </Grid>
    </Box>
  </Layout>
)

export default IndexPage
