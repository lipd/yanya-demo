import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { white, yellow } from './utils/colors'
import Tabs from './views/Tabs'
import MusicLibrary from './views/MusicLibrary'
import Mine from './views/Mine'

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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
