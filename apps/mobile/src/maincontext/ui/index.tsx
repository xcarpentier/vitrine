import React from 'react'
import {
  GiftedChat,
  GiftedAvatar,
  Bubble,
  Composer,
  MessageText,
  Day,
  Time,
  Send,
} from 'react-native-gifted-chat'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { ChatMessage } from '../domain/entities/ChatMessage'
import { UsersModal } from './components/UsersModal'
import { User } from '../domain/entities/User'
import { StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/src/core/ui/customs/CustomColor'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Platform } from 'react-native'

const fontFamily = 'Open Sans'
const AVATAR_SIZE = 38
const styles = StyleSheet.create({
  avatarStyle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  bubble: {
    borderRadius: 8,
    justifyContent: 'flex-end',
    minHeight: 20,
  },
  bubbleLeft: {
    marginRight: 60,
  },
  bubbleRight: {
    marginLeft: 60,
  },
  bubbleLeftWrapperStyle: {
    backgroundColor: 'transparent',
    marginRight: 0,
  },
  bubbleRightWrapperStyle: {
    backgroundColor: 'transparent',
    marginLeft: 0,
  },
  textInput: {
    fontFamily,
    lineHeight: Platform.select({
      ios: 17,
      android: 20,
    }),
  },
  textStyle: {
    fontFamily,
  },
  timeStyle: {
    fontFamily,
  },
  dayStyle: {
    fontFamily,
    color: '#fff',
    fontSize: 15,
  },
  sendContainer: {
    height: 44,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})

const isLeft = (props: Bubble['props']) => props.position === 'left'

const renderAvatar = (isAdmin: boolean) => (_: any) => {
  if (_.position === 'right') {
    return null
  }
  if (isAdmin) {
    return null
  }

  return (
    <GiftedAvatar
      user={{ _id: 0, avatar: require('../../assets/images/me.jpg') }}
      avatarStyle={styles.avatarStyle}
    />
  )
}
const bubbleGradientRight = [CustomColor.primaryDD, CustomColor.primary]
const bubbleGradientLeft = [CustomColor.greyLLL, CustomColor.greyLLLL]
const startLeft = [0, 1] as [number, number]
const endLeft = [1, 0] as [number, number]
const startRight = startLeft.reverse() as [number, number]
const endRight = endLeft.reverse() as [number, number]
const renderBubble = (props: Bubble['props']) => (
  <LinearGradient
    colors={isLeft(props) ? bubbleGradientLeft : bubbleGradientRight}
    start={isLeft(props) ? startLeft : startRight}
    end={isLeft(props) ? endLeft : endRight}
    style={[
      styles.bubble,
      props.position === 'left' ? styles.bubbleLeft : styles.bubbleRight,
    ]}
  >
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.bubbleLeftWrapperStyle,
        right: styles.bubbleRightWrapperStyle,
      }}
    />
  </LinearGradient>
)

const renderComposer = (props: Composer['props']) => (
  <Composer {...props} textInputStyle={styles.textInput} />
)

const renderSend = (props: Send['props']) => {
  const { onSend, text } = props
  if (text && text.trim().length > 0) {
    return (
      <TouchableOpacity
        style={styles.sendContainer}
        onPress={() => {
          if (onSend) {
            onSend({ text: text.trim() }, true)
          }
        }}
      >
        <Feather name="send" color={CustomColor.primary} size={24} />
      </TouchableOpacity>
    )
  }
  return <View />
}

const renderDay = (props: Day['props']) => (
  <Day {...props} textStyle={styles.dayStyle} />
)

const renderTime = (props: Time['props']) => (
  <Time
    {...props}
    textStyle={{ left: styles.timeStyle, right: styles.timeStyle }}
  />
)

const renderMessageText = (props: MessageText['props']) => (
  <MessageText
    {...props}
    textStyle={{ left: styles.textStyle, right: styles.textStyle }}
    textProps={{ allowFontScaling: false }}
  />
)

interface Props {
  currentUser?: User
  messages: ChatMessage[]
  currentContact?: User
  contacts: User[]
  isAdmin: boolean
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
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={{ width: '100%', height: '100%' }}
    >
      <GiftedChat
        {...{
          messages,
          onSend,
          user: currentUser,
          renderAvatar: renderAvatar(isAdmin),
          showUserAvatar: false,
          keyboardShouldPersistTaps: 'always',
          renderBubble,
          renderComposer,
          renderMessageText,
          renderDay,
          renderTime,
          renderSend,
        }}
      />
    </ImageBackground>
  </>
)
