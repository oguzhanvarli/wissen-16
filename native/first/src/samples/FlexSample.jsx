import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlexSample = () => {
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

export default FlexSample

const styles = StyleSheet.create({
  container : {
    backgroundColor : "red",
    flex: 1,
    flexDirection: "row"
  },
  firstContainer : {
    backgroundColor: "aqua",
    flex: 1
  },
  secondContainer : {
    backgroundColor: "green",
    flex: 1
  },
  thirdContainer : {
    backgroundColor: "orange",
    flex: 1
  },
})