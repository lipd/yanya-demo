import React from 'react'
import {
  Ionicons,
  Foundation,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import MusicLibrary from './MusicLibrary'
import Mine from './Mine'
import MusicInfo from './MusicInfo'
import { white, yellow } from '../utils/colors'

const Tabs = TabNavigator(
  {
    MusicLibrary: {
      screen: MusicLibrary,
      navigationOptions: {
        tabBarLabel: '音乐库',
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="music-circle"
            size={30}
            color={yellow}
          />
        )
      }
    },
    PostView: {
      screen: View,
      navigationOptions: {
        tabBarLabel: '专栏',
        tabBarIcon: () => <Ionicons name="md-book" size={30} color={yellow} />
      }
    },
    View: {
      screen: MusicInfo,
      navigationOptions: {
        tabBarLabel: '资讯',
        tabBarIcon: () => <Entypo name="documents" size={30} color={yellow} />
      }
    },
    NewDeckView: {
      screen: View,
      navigationOptions: {
        tabBarLabel: '圈子',
        tabBarIcon: () => (
          <Entypo name="circular-graph" size={30} color={yellow} />
        )
      }
    },
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '个人',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home-circle" size={30} color={yellow} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#ffb630'
    }
  }
)

export default Tabs