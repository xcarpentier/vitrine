import * as React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'
import { CustomColor } from './customs/CustomColor'
import { CustomText, CustomTextProps, Paragraph } from './customs/CustomText'
import { Row } from './customs/CustomView'

const styles = StyleSheet.create({
  testimonyContent: {
    padding: 15,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
  name: string
  label: string
  source: ImageSourcePropType
}
export const TestimonyAuthor = ({
  source,
  name,
  label,
}: TestimonyAuthorProps) => (
  <Row>
    <Image {...{ source }} style={styles.image} />
    <CustomText size="s" style={{ maxWidth: 120, paddingLeft: 10 }}>
      {name} {'\n'}
      <CustomText size="s" color={CustomColor.greyLL}>
        {label}
      </CustomText>
    </CustomText>
  </Row>
)
