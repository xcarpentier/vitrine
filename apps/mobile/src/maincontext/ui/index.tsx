import React from 'react'
import { GiftedChat, GiftedAvatar } from 'react-native-gifted-chat'
import { ChatMessage } from '../domain/entities/ChatMessage'
import { mainContextDependencies } from '../configuration/mainContextDependencies'
import { UsersModal } from './components/UsersModal'
import { User } from '../domain/entities/User'

const renderAvatar = () => (
  <GiftedAvatar user={{ _id: 0, avatar: require('../../assets/me.jpg') }} />
)

interface Props {
  currentUser?: User
  messages: ChatMessage[]
  currentContact?: User
  contacts: User[]
  isAdmin: boolean
  mainContext: typeof mainContextDependencies
  onSend(message: ChatMessage[]): void
  selectUser(user: User): void
}

export const Main = ({
  messages,
  onSend,
  currentContact,
  isAdmin,
  contacts: data,
  selectUser,
  currentUser,
}: Props) => (
  <>
    <UsersModal
      visible={isAdmin && !currentContact}
      {...{ data, selectUser }}
    />
    <GiftedChat {...{ messages, onSend, user: currentUser, renderAvatar }} />
  </>
)
