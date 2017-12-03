import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import TopBar from '../components/TopBar'
import NameCard from '../components/NameCard'
import { lineGray, white } from '../utils/colors'

class Mine extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopBar title="我的" />
        <ScrollView style={{ flex: 1, backgroundColor: lineGray }}>
          <NameCard />
        </ScrollView>
      </View>
    )
  }
}

export default Mine
