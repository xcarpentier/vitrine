import React from 'react'
import {
  Modal,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native'
import { User } from '../../domain/entities/User'
import { View } from 'react-native'
import { CustomColor } from '@vitrine/common/lib/core/ui/customs/CustomColor'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  itemContainer: {
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  sep: {
    width: '100%',
    height: 1,
    backgroundColor: CustomColor.greyLLL,
  },
})

interface Props {
  visible?: boolean
  data: User[]
  selectUser(user: User): void
}

const renderItem = (selectUser: Props['selectUser']) => ({
  item,
}: ListRenderItemInfo<User>) => (
  <TouchableOpacity
    onPress={() => selectUser(item)}
    style={styles.itemContainer}
  >
    <Text>{item._id}</Text>
  </TouchableOpacity>
)
const renderSeparator = () => <View style={styles.sep} />

const keyExtractor = ({ _id }: User) => _id

export const UsersModal = ({ visible, data, selectUser }: Props) => (
  <Modal {...{ visible }}>
    <FlatList
      {...{
        data,
        renderItem: renderItem(selectUser),
        keyExtractor,
        contentContainerStyle: styles.container,
        ItemSeparatorComponent: renderSeparator,
      }}
    />
  </Modal>
)
