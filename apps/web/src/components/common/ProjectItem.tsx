import * as React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import { CustomText } from '@vitrine/common/src/core/ui/customs/CustomText'

const styles = StyleSheet.create({
  container: { flex: 1, width: 250 },
  image: { flex: 1, width: '100%' },
})

interface ProjectItemProps {
  source: ImageSourcePropType
  title: string
  onPress(): void
}
export const ProjectItem = ({ source, title, onPress }: ProjectItemProps) => (
  <TouchableOpacity style={styles.container} {...{ onPress }}>
    <Image {...{ source }} style={styles.image} resizeMode="contain" />
    <CustomText center weight="thin" color={CustomColor.primary}>
      {title}
    </CustomText>
  </TouchableOpacity>
)
