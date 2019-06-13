import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ChatMessage } from '../domain/entities/ChatMessage'
import { mainContextDependencies } from '../configuration/mainContextDependencies'
import { User } from 'react-native-gifted-chat/lib/types'
import Constants from 'expo-constants'

const renderAvatar = () => null

const user: User = {
  _id: Constants.installationId,
  name: 'Xavier',
}

interface Props {
  messages: ChatMessage[]
  mainContext: typeof mainContextDependencies
  onSend(message: ChatMessage[]): void
}

export const Main = ({ messages, onSend }: Props) => (
  <GiftedChat
    {...{ messages, onSend, user, renderAvatar, renderAvatarOnTop: true }}
  />
)
