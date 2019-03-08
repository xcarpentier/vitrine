import * as React from 'react'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { Grid, GridItem } from '../common/customs/CustomView'
import { ProjectItem } from '../common/ProjectItem'

export const ProjectGrid = ({ navigateTo }: Partial<AppContextType>) => (
  <Grid>
    <GridItem>
      <ProjectItem
        source={require('../../images/papott.jpg')}
        title="9 days to develop an application"
        onPress={() => navigateTo!('project/papott')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/sneat.jpg')}
        title="App with notification & payment"
        onPress={() => navigateTo!('project/sneat')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/docdok.jpg')}
        title="A platform for communication between doctors and patients."
        onPress={() => navigateTo!('project/docdok')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/your_app_here.jpeg')}
        title="Your app here?"
        onPress={() => navigateTo!('contact')}
      />
    </GridItem>
  </Grid>
)
