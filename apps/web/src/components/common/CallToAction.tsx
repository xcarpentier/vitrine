import * as React from 'react'
import { CustomButton } from './customs/CustomButton'
import { BoxContent, BoxTitle } from './customs/CustomContent'
import { BorderBox } from '@vitrine/common/src/core/ui/customs/CustomView'

interface CallToActionProps {
  onPress(): void
}
export const CallToAction = (props: CallToActionProps) => (
  <BorderBox>
    <BoxTitle>How can you work with me?</BoxTitle>
    <BoxContent center={false}>
      I favour collaboration with start-ups driven by an innovative idea (and
      willing to pay the fair value of an experienced developer). Is that you?
      If so, I'd be delighted to work on your project!
    </BoxContent>
    <CustomButton
      size="l"
      title="Contact me!"
      onPress={props.onPress}
      style={{ marginTop: 40 }}
    />
  </BorderBox>
)
