import React from 'react'
import { Centered } from '@vitrine/common/src/core/ui/customs/CustomView'
import { Heading2 } from '@vitrine/common/src/core/ui/customs/CustomText'
import { Button } from 'react-native'
import { mainContextDependencies } from '../../configuration/mainContextDependencies'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

interface Props {
  error: string
}

const onPress = mainContextDependencies.appInteractor.refresh

export const ErrorLayer = ({ error }: Props) => (
  <Centered style={styles.container}>
    <Heading2>{error}</Heading2>
    <Button title="Refresh" {...{ onPress }} />
  </Centered>
)
