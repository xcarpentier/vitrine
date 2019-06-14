import React from 'react'
import { Main } from './src/maincontext/ui'
import { mainContextDependencies } from './src/maincontext/configuration/mainContextDependencies'
import { ChatMessage } from './src/maincontext/domain/entities/ChatMessage'
import { notificationContextDependencies } from './src/notificationcontext/configuration/notificationContextDependencies'
import { Notification } from './src/notificationcontext/domain/entities/Notification'
import { AppLoading } from 'expo'
import { User } from './src/maincontext/domain/entities/User'

interface State {
  messages: ChatMessage[]
  acceptNotification: boolean
  isReady: boolean
  isAdmin: boolean
  contacts?: User[]
  currentContact?: User
  currentUser?: User
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
  }

  mainContext = mainContextDependencies
  notificationContext = notificationContextDependencies

  componentDidMount() {
    this.bootstrap()
  }

  bootstrap = async () => {
    const messages = await this.mainContext.mainInteractor.loadMessagesAsync()
    this.setState({ messages })
    const acceptNotification = await this.notificationContext.notificationInteractor.subscribeAsync()
    this.setState({ acceptNotification })
    if (acceptNotification) {
      this.notificationContext.notificationInteractor.onNotification(
        this.handleNotification,
      )
    }
    const isAdmin = this.mainContext.userInteractor.isAdmin()
    if (isAdmin) {
      const contacts = await this.mainContext.userInteractor.getContactsAsync()
      this.setState({ contacts })
    } else {
      const currentContact = await this.mainContext.userInteractor.getAdminAsync()
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
      this.mainContext.mainInteractor.sendMessageAsync(
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
    const {
      messages,
      isReady,
      currentContact,
      isAdmin,
      contacts,
      currentUser,
    } = this.state

    if (!isReady) {
      return <AppLoading />
    }

    const { mainContext, onSend, selectUser } = this
    return (
      <Main
        {...{
          selectUser,
          messages,
          mainContext,
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
