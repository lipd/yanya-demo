import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import { yellow, white } from '../../utils/colors'
import Star from './Star'

class CardBody extends Component {
  render() {
    const type = this.props.type
    if (type === 'commend') {
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
    } else {
      const cards = [
        {
          score: 6.1,
          star: 3,
          name: "幽游"
        },
        {
          score: 9.5,
          star: 5,
          name: '临安遗恨'
        },
        {
          score: 9.7,
          star: 5,
          name: '十面埋伏'
        },
        {
          score: 8.2,
          star: 5,
          name: '如花美眷'
        },
        {
          score: 8.2,
          star: 4,
          name: '行云流水'
        }
      ]
      return (
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => {
              const source = `file:///Users/lipeidao/Projects/yanya-demo/utils/img/f${index +
                1}.jpg`
              return (
                <View style={styles.subCard} key={index}>
                  <Image style={styles.subImage} source={{ uri: source }} />
                  <View style={styles.subContainer}>
                    <Text style={styles.name}>{card.name}</Text>
                    <Star star={card.star} score={card.score}/>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      )
    }
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
  },
  subCard: {
    margin: 10
  },
  subImage: {
    width: 120,
    height: 160
  },
  name: {
    marginTop: 5,
    fontWeight: '500'
  }
})

export default CardBody
