import * as React from 'react'
import { AppContextType } from '@vitrine/common/src/configuration/context'
import { Grid, GridItem } from '@vitrine/common/src/core/ui/customs/CustomView'
import { ProjectItem } from '../common/ProjectItem'

export const ProjectGrid = ({
  navigateTo,
}: Pick<AppContextType, 'navigateTo'>) => (
  <Grid>
    <GridItem>
      <ProjectItem
        source={require('../../images/papott.jpg')}
        title="9 days to develop an application"
        onPress={() => navigateTo('mobile-development-projects/papott')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/sneat.jpg')}
        title="App with notification & payment"
        onPress={() => navigateTo('mobile-development-projects/sneat')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/docdok.jpg')}
        title="A platform for communication between doctors and patients."
        onPress={() => navigateTo('mobile-development-projects/docdok')}
      />
    </GridItem>
    <GridItem>
      <ProjectItem
        source={require('../../images/your_app_here.jpeg')}
        title="Your app here?"
        onPress={() => navigateTo('contact')}
      />
    </GridItem>
  </Grid>
)
