import * as React from 'react'
import {
  MainIntro,
  MainTitle,
} from '../../components/common/customs/CustomContent'
import { MainHead } from '@vitrine/common/src/core/ui/customs/CustomView'
import { CallToAction } from '../../components/common/CallToAction'
import { withContext } from '@vitrine/common/src/core/ui/higherOrderComponent/withContext'
import { SneatBox } from './sneat'
import { PapottBox } from './papott'
import { DocdokBox } from './docdok'
import { compose } from 'recompose'
import {
  PageProps,
  withLayout,
} from '../../components/higherOrderComponent/withLayout'
import { OpenSourceBox } from '../../components/shared/OpenSourceBox'

const ProjectPage = ({ navigateTo, openURL }: PageProps) => (
  <>
    <MainHead>
      <MainTitle>
        Projects that prove combining speed and quality isn't a myth
      </MainTitle>
      <MainIntro>
        Here are 3 applications I developed very quickly, all the while
        resulting in a fast and responsive application.
      </MainIntro>
    </MainHead>
    <SneatBox {...{ navigateTo, openURL }} />
    <PapottBox {...{ openURL }} />
    <DocdokBox {...{ openURL }} />
    <OpenSourceBox {...{ navigateTo }} />
    <CallToAction
      onPress={() => openURL('mailto:xcapetir+project@gmail.com')}
    />
  </>
)

export default compose<PageProps, any>(
  withContext,
  withLayout({ title: 'Success stories' }),
)(ProjectPage)
