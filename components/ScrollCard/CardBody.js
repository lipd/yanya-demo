import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import { yellow, white } from '../../utils/colors'

class CardBody extends Component {
  render() {
    const cards = [
      {
        title: '最强音乐季来袭，每一场都经典中的经典！'
      },
      {
        title: '这是我这辈子听到过最牛的一场民乐音乐会！'
      },
      {
        title: '十年磨一剑，近距离聆听大师的声音'
      }
    ]
    return (
      <View style={styles.scrollContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cards.map((card, index) => {
            const source = `file:///Users/lipeidao/Projects/yanya-demo/utils/img/p${index +
              1}.jpg`
            return (
              <View style={styles.card} key={index}>
                <Image style={styles.image} source={{ uri: source }} />
                <View style={styles.textContainer}>
                  <Text style={styles.cardText}>{card.title}</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10
  },
  image: {
    width: 170,
    height: 120
  },
  textContainer: {
    backgroundColor: '#202224',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    width: 170
  },
  cardText: {
    color: white,
    fontSize: 12
  }
})

export default CardBody
