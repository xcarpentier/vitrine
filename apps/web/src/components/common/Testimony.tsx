import * as React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import {
  CustomText,
  CustomTextProps,
  Paragraph,
} from '@vitrine/common/src/core/ui/customs/CustomText'
import { Row } from '@vitrine/common/src/core/ui/customs/CustomView'

const styles = StyleSheet.create({
  testimonyContent: {
    padding: 15,
  },
  small: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  medium: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  large: {
    width: 144,
    height: 144,
    borderRadius: 72,
  },
})

export const TestimonyContent = (props: CustomTextProps) => (
  <Paragraph
    {...props}
    size="m"
    style={[styles.testimonyContent, props.style]}
    color={CustomColor.black}
  />
)

interface TestimonyAuthorProps {
  name?: string
  label?: string
  source: ImageSourcePropType
  size?: 's' | 'm' | 'l'
}
export const TestimonyAuthor = ({
  source,
  name,
  label,
  size,
}: TestimonyAuthorProps) => (
  <Row>
    <Image
      {...{ source }}
      style={(() => {
        switch (size) {
          case 's': {
            return styles.small
          }
          case 'm': {
            return styles.medium
          }
          case 'l': {
            return styles.large
          }
          default: {
            return styles.small
          }
        }
      })()}
    />

    <CustomText size="s" style={{ maxWidth: 120, paddingLeft: 10 }}>
      {name || ''} {'\n'}
      <CustomText size="s" color={CustomColor.greyLL}>
        {label || ''}
      </CustomText>
    </CustomText>
  </Row>
)
