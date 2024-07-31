import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const CounterSample = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text style={{ fontSize: 40, color: "#f21212", textAlign: "center" }}>{counter}</Text>
      <Button title='Azalt' onPress={() => setCounter(counter - 1)} color={"#f99"}></Button>
      <Button title='Arttır' onPress={() => setCounter(counter + 1)} color={"red"} />
    </View>
  )
}

export default CounterSample