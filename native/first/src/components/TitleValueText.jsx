import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleValueText = ({title, value}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default TitleValueText

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 2,
    borderBottomColor: "#ddd"
  },
  title :{
    fontWeight: "700",
    fontSize: 15
  },
  value : {
    fontSize: 15
  }
})