import React from 'react'
import { View, StatusBar } from 'react-native'
import { white, yellow } from './utils/colors'
import Tabs from './views/Tabs'
import MyStatusBar from './components/MyStatusBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor={white} barStyle="dark-content" />
        <Tabs />
      </View>
    )
  }
}
