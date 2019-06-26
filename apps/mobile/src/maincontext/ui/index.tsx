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
  Avatar,
} from 'react-native-gifted-chat'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import { ChatMessage } from '../domain/entities/ChatMessage'
import { UsersModal } from './components/UsersModal'
import { User } from '../domain/entities/User'
import { StyleSheet } from 'react-native'
import { CustomColor } from '@vitrine/common/lib/core/ui/customs/CustomColor'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Platform } from 'react-native'
import { isSameUser, isSameDay } from 'react-native-gifted-chat/lib/utils'

const fontFamily = 'Open Sans'
const AVATAR_SIZE = 38
const DEFAULT_RADIUS = 13
const ALTER_RADIUS = 3
const styles = StyleSheet.create({
  avatarStyle: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  bubble: {
    justifyContent: 'flex-end',
    minHeight: 20,
    overflow: 'hidden',
    borderRadius: DEFAULT_RADIUS,
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
  bubbleLeftNext: {
    borderBottomLeftRadius: ALTER_RADIUS,
  },
  bubbleLeftPrevious: {
    borderTopLeftRadius: ALTER_RADIUS,
  },
  bubbleRightNext: {
    borderBottomRightRadius: ALTER_RADIUS,
  },
  bubbleRightPrevious: {
    borderTopRightRadius: ALTER_RADIUS,
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
    fontSize: 13,
  },
  sendContainer: {
    height: 44,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.75,
  },
  dayMask: {
    minWidth: 100,
    maxWidth: 250,
    overflow: 'hidden',
    borderRadius: DEFAULT_RADIUS,
  },
})

const isLeft = (props: Bubble['props']) => props.position === 'left'

const stylingBubbleToNext = (props: Bubble['props']) => {
  const { currentMessage, nextMessage } = props
  if (
    currentMessage &&
    nextMessage &&
    isSameUser(currentMessage, nextMessage) &&
    isSameDay(currentMessage, nextMessage)
  ) {
    return isLeft(props) ? styles.bubbleLeftNext : styles.bubbleRightNext
  }
  return null
}

const stylingBubbleToPrevious = (props: Bubble['props']) => {
  const { currentMessage, previousMessage } = props
  if (
    currentMessage &&
    previousMessage &&
    isSameUser(currentMessage, previousMessage) &&
    isSameDay(currentMessage, previousMessage)
  ) {
    return isLeft(props)
      ? styles.bubbleLeftPrevious
      : styles.bubbleRightPrevious
  }
  return null
}

const renderAvatar = (isAdmin: boolean) => (props: Avatar['props']) => {
  if (!isLeft(props)) {
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
const defaultGradient = [CustomColor.primaryDD, CustomColor.primary]
const bubbleGradientLeft = [CustomColor.greyLLL, CustomColor.greyLLLL]
const bubbleGradientRight = defaultGradient
const startLeft = [0, 1] as [number, number]
const endLeft = [1, 0] as [number, number]
const startRight = startLeft.reverse() as [number, number]
const endRight = endLeft.reverse() as [number, number]
const renderBubble = (props: Bubble['props']) => (
  <View
    style={[
      styles.bubble,
      props.position === 'left' ? styles.bubbleLeft : styles.bubbleRight,
      stylingBubbleToNext(props),
      stylingBubbleToPrevious(props),
    ]}
  >
    <LinearGradient
      colors={isLeft(props) ? bubbleGradientLeft : bubbleGradientRight}
      start={isLeft(props) ? startLeft : startRight}
      end={isLeft(props) ? endLeft : endRight}
    >
      <Bubble
        {...props}
        wrapperStyle={{
          left: styles.bubbleLeftWrapperStyle,
          right: styles.bubbleRightWrapperStyle,
        }}
      />
    </LinearGradient>
  </View>
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
  <View style={styles.dayContainer}>
    <View style={styles.dayMask}>
      <LinearGradient colors={defaultGradient} start={startLeft} end={endLeft}>
        <Day {...props} textStyle={styles.dayStyle} />
      </LinearGradient>
    </View>
  </View>
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
          keyboardShouldPersistTaps: 'never',
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
