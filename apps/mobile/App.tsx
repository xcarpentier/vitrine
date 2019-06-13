import React from 'react'
import { Main } from './src/maincontext/ui'
import { IMessage } from 'react-native-gifted-chat/lib/types'
import { mainContextDependencies } from './src/maincontext/configuration/mainContextDependencies'
import { ChatMessage } from './src/maincontext/domain/entities/ChatMessage'

interface State {
  messages: ChatMessage[]
}
export default class App extends React.Component<any, State> {
  state = {
    messages: [],
  }

  mainContext = mainContextDependencies

  async componentDidMount() {
    const messages = await this.mainContext.mainInteractor.loadMessagesAsync()
    this.setState({ messages })
  }

  onSend = (messages: ChatMessage[]) => {
    this.setState({
      messages: [...messages, ...this.state.messages],
    })
    this.mainContext.mainInteractor.sendMessageAsync(messages[0])
  }

  render() {
    const { messages } = this.state
    const { mainContext, onSend } = this
    return <Main {...{ messages, mainContext, onSend }} />
  }
}
