import { StyleSheet, Text, View, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import LinearGradient from 'react-native-linear-gradient'
import { baseService } from '../services/baseService'

const Home = ({navigation}) => {
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    getData()
  }, [])
 
  
  const getData = async () => {
    try {
      let response = await baseService.get("/character")
      setData(response.results)
    } catch (error) {
      console.log("Get Character Error", error)
    }
  }


  useEffect(() => {
    if(pageNumber !== 1) getNextPage()
  }, [pageNumber])

  const getNextPage = async() => {
    baseService.get(`/character?page=${pageNumber}`)
    .then(res => setData([...data, ...res.results]))
    .catch(err => console.log("Get Next Page Error", err))
  }

  const goToDetail = (id) => {
    navigation.navigate("CharacterDetail", {userId : id})
  }


  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#8360c3', '#2ebf91']}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <CharacterCard item={item} goToDetail={goToDetail} />}
          keyExtractor={item => item.id}
          //INFINITY SCROLL
          onEndReached={() => setPageNumber(pageNumber + 1)}
          onEndReachedThreshold={4}
          ListFooterComponent={
            <View style={{margin: 10}}>
              <ActivityIndicator size={"large"} color={"white"} />
            </View>
          }
        />
      </LinearGradient>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})