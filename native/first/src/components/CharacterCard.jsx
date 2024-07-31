import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CharacterCard = ({item}) => {
  return (
    <View style={{ margin: 20 }}>
      <Image source={{ uri: item.image }} width={200} height={200} />
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
      <Text>{item.species}</Text>
    </View>
  )
}

export default CharacterCard

const styles = StyleSheet.create({})