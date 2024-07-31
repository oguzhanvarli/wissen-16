import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const windowWidht = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

const FlexSample2 = () => {
  console.log(windowHeight)
  console.log(windowWidht)
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text>1</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text>2</Text>
      </View>
      <View style={styles.thirdContainer}>
        <Text>3</Text>
      </View>
    </View>
  )
}

export default FlexSample2

const styles = StyleSheet.create({
  container : {
    backgroundColor : "red",
    height: windowHeight
  },
  firstContainer : {
    backgroundColor: "aqua",
    height: windowHeight / 2
  },
  secondContainer : {
    backgroundColor: "green",
    height: windowHeight / 4
  },
  thirdContainer : {
    backgroundColor: "orange",
    height: windowHeight / 4
  },
})