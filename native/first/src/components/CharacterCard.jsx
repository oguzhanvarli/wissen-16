import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import LinearGradient from 'react-native-linear-gradient'

const CharacterCard = ({ item, goToDetail }) => {
  return (
    <TouchableOpacity onPress={() => goToDetail(item.id)}>
      <Card containerStyle={styles.cardStyle} >
        <Card.Title style={styles.cartTextStyle}>{item.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ height: 350 }}
          resizeMode='contain'
          source={{
            uri: item.image
          }}
        />
      </Card>
    </TouchableOpacity>
  )
}

export default CharacterCard

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 20
  },
  cartTextStyle: {
    color: "#93291E",
    fontSize: 18,
  }
})