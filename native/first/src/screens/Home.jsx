import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'

const Home = () => {
  const [data, setData] = useState({
    info: {},
    results: []
  })
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      let response = await axios.get("https://rickandmortyapi.com/api/character")
      setData(response.data)
    } catch (error) {
      console.log("Get Character Error", error)
    }
  }
  return (
    <View>
      {/* {
        data.results.map((item, key) => (
         <CharacterCard item={item} key={key} />
        ))
      } */}

      <FlatList 
        data={data.results}
        renderItem={({item}) => <CharacterCard item={item} />}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})