import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { Ionicons, Foundation, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { white, yellow } from './utils/colors'
import TopBar from './components/TopBar'
import ScrollTopBar from './components/ScrollTopBar'

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  MusicView: {
    screen: View,
    navigationOptions: {
      tabBarLabel: '音乐库',
      tabBarIcon: () => (
        <MaterialCommunityIcons name="music-circle" size={30} color={yellow} />
      )
    }
  },
  PostView: {
    screen: View,
    navigationOptions: {
      tabBarLabel: '文章',
      tabBarIcon: () => <Ionicons name="md-book" size={30} color={yellow} />
    }
  },
  View: {
    screen: View,
    navigationOptions: {
      tabBarLabel: '音乐资讯',
      tabBarIcon: () => <Entypo name="documents" size={30} color={yellow} />
    }
  },
  NewDeckView: {
    screen: View,
    navigationOptions: {
      tabBarLabel: '小组',
      tabBarIcon: () => <Entypo name="circular-graph" size={30} color={yellow} />
    }
  },
  DeckView: {
    screen: View,
    navigationOptions: {
      tabBarLabel: '个人主页',
      tabBarIcon: () => <MaterialCommunityIcons name="home-circle" size={30} color={yellow} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#ffb630'
  }
})

export default class App extends React.Component {
  render() {
    const topics = ['话题1', '话题2', '话题3', '话题4', '话题6', '话题7', '话题8', '话题9']
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor={white} barStyle="dark-content" />
        <TopBar title='音乐库'/>
        <ScrollTopBar topics={topics}/>
        <Tabs />
      </View>
    )
  }
}
