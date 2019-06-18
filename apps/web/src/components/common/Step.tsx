import * as React from 'react'
import { StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import {
  CustomText,
  Heading3,
  Paragraph,
} from '@vitrine/common/src/core/ui/customs/CustomText'
import {
  CustomView,
  CustomViewProps,
} from '@vitrine/common/src/core/ui/customs/CustomView'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: 495,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: CustomColor.primaryL,
  },
  stepItem: {
    borderBottomColor: CustomColor.primaryL,
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  stepItemContentContainer: {
    maxWidth: 425,
    marginLeft: 25,
  },
})

export const StepContainer = (props: CustomViewProps) => (
  <CustomView style={styles.container} {...props} />
)

interface StepItemProps {
  numberTitle: number
  title: string
  subtitle: string
  hideBorder?: boolean
}

export const StepNumber = (props: Partial<StepItemProps>) => (
  <CustomView center style={styles.stepNumber}>
    <CustomText size="l" weight="thin">
      {props.numberTitle}
    </CustomText>
  </CustomView>
)

export const StepItem = ({
  numberTitle,
  title,
  subtitle,
  hideBorder,
}: StepItemProps) => (
  <CustomView
    direction="row"
    style={[styles.stepItem, hideBorder && { borderBottomWidth: 0 }]}
  >
    <StepNumber {...{ numberTitle }} />
    <CustomView style={styles.stepItemContentContainer}>
      <Heading3 numberOfLines={2} weight="thin">
        {title}
      </Heading3>
      <Paragraph numberOfLines={2}>{subtitle}</Paragraph>
    </CustomView>
  </CustomView>
)
