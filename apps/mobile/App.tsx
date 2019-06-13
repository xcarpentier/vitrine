import React from 'react'
import { StyleSheet } from 'react-native'
import { Main } from './src/maincontext/ui'

export default class App extends React.Component {
  render() {
    return <Main />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
