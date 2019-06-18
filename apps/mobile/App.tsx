import React from 'react'
import { Main } from './src/maincontext/ui'
import { mainContextDependencies } from './src/maincontext/configuration/mainContextDependencies'
import { ChatMessage } from './src/maincontext/domain/entities/ChatMessage'
import { notificationContextDependencies } from './src/notificationcontext/configuration/notificationContextDependencies'
import { Notification } from './src/notificationcontext/domain/entities/Notification'
import { AppLoading } from 'expo'
import { User } from './src/maincontext/domain/entities/User'
import { MessagingInteractor } from './src/maincontext/domain/gateways/Messaging.interactor'
import { NotificationInteractor } from './src/notificationcontext/domain/gateways/Notification.interactor'
import { UserInteractor } from './src/maincontext/domain/gateways/User.interactor'
import { ErrorLayer } from './src/maincontext/ui/components/ErrorLayer'
import { AppInteractor } from './src/maincontext/domain/gateways/App.interactor'

interface State {
  messages: ChatMessage[]
  acceptNotification: boolean
  isReady: boolean
  isAdmin: boolean
  contacts?: User[]
  currentContact?: User
  currentUser?: User
  error?: string
}
export default class App extends React.Component<any, State> {
  state = {
    messages: [],
    acceptNotification: true,
    isReady: false,
    isAdmin: false,
    contacts: [],
    currentContact: undefined,
    currentUser: undefined,
    error: undefined,
  }

  mainInteractor?: MessagingInteractor = undefined
  userInteractor?: UserInteractor = undefined
  notificationInteractor?: NotificationInteractor = undefined
  appInteractor?: AppInteractor = undefined
  unsubscribe?: () => void = undefined

  componentDidMount() {
    this.mainInteractor = mainContextDependencies.mainInteractor
    this.userInteractor = mainContextDependencies.userInteractor
    this.appInteractor = mainContextDependencies.appInteractor
    this.notificationInteractor =
      notificationContextDependencies.notificationInteractor
    try {
      this.bootstrap()
    } catch (error) {
      this.handleError(error)
    }
  }

  componentDidCatch(error: Error) {
    this.handleError(error)
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  handleError = (error: Error) =>
    this.setState({
      error: __DEV__
        ? error.message
        : 'We are sorry an error occurred. Please refresh.',
    })

  bootstrap = async () => {
    await this.appInteractor!.loadFontAsync({
      'Open Sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    })
    await this.appInteractor!.loadImageAsync([
      require('./src/assets/images/background.jpg'),
      require('./src/assets/images/me.jpg'),
    ])
    const messages = await this.mainInteractor!.loadMessagesAsync()
    this.setState({ messages })
    const token = await this.notificationInteractor!.subscribeAsync()
    const acceptNotification = !!token
    if (acceptNotification) {
      this.unsubscribe = this.notificationInteractor!.onNotification(
        this.handleNotification,
      )
    }
    const isAdmin = this.userInteractor!.isAdmin()
    this.setState({ acceptNotification, currentUser: { _id: token!, isAdmin } })
    if (isAdmin) {
      const contacts = await this.userInteractor!.getContactsAsync()
      this.setState({ contacts })
    } else {
      const currentContact = await this.userInteractor!.getAdminAsync()
      this.setState({ currentContact })
    }
    this.setState({ isReady: true, isAdmin })
  }

  handleNotification = ({ text, id: _id, pushToken }: Notification) => {
    this.setState({
      messages: [
        { text, _id, createdAt: new Date(), user: { _id: pushToken } },
        ...this.state.messages,
      ],
    })
  }

  onSend = (messages: ChatMessage[]) => {
    this.setState({
      messages: [...messages, ...this.state.messages],
    })
    if (this.state.currentContact) {
      this.mainInteractor!.sendMessageAsync(
        messages[0],
        this.state.currentContact!,
      )
    }
  }

  selectUser = (currentContact: User) => this.setState({ currentContact })

  unselectUser = () => {
    if (this.state.isAdmin) {
      this.setState({ currentContact: undefined })
    }
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    if (this.state.error) {
      return <ErrorLayer error={this.state.error!} />
    }

    const {
      messages,
      currentContact,
      isAdmin,
      contacts,
      currentUser,
    } = this.state

    const { onSend, selectUser } = this
    return (
      <Main
        {...{
          selectUser,
          messages,
          onSend,
          currentContact,
          currentUser,
          isAdmin,
          contacts,
        }}
      />
    )
  }
}
