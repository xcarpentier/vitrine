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

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  itemContainer: {
    padding: 15,
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

const keyExtractor = ({ _id }: User) => _id

export const UsersModal = ({ visible, data, selectUser }: Props) => (
  <Modal {...{ visible }}>
    <FlatList
      {...{
        data,
        renderItem: renderItem(selectUser),
        keyExtractor,
        contentContainerStyle: styles.container,
      }}
    />
  </Modal>
)
