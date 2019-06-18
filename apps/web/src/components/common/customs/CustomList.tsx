import * as React from 'react'
import {
  CustomView,
  CustomViewProps,
  Row,
} from '@vitrine/common/src/core/ui/customs/CustomView'
import { StyleSheet } from 'react-native'
import { CustomText } from '@vitrine/common/src/core/ui/customs/CustomText'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  item: {
    marginBottom: 10,
  },
})

export const ListContainer = (props: CustomViewProps) => (
  <CustomView
    style={[styles.container, props.style]}
    accessibilityRole="list"
    {...props}
  />
)

export const ListItem = (props: { children: string }) => (
  <Row style={styles.item} accessibilityRole="listitem" {...props}>
    <CustomText>{'•  '}</CustomText>
    <CustomText>{props.children}</CustomText>
  </Row>
)
