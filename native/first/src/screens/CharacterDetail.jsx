import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseService } from '../services/baseService'
import { Card } from '@rneui/themed'
import TitleValueText from '../components/TitleValueText'
import { colors } from '../theme/colors'

const CharacterDetail = ({ route, navigation }) => {
  const { userId } = route.params

  const [data, setData] = useState(
    {
      id: 1,
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: ""
      },
      location: {
        name: "",
        url: ""
      },
      image: "",
      episode: [],
      url: "",
      created: ""
    })

  useEffect(() => {
    getData()
  }, [userId])

  const getData = async () => {
    try {
      let response = await baseService.get(`/character/${userId}`)
      setData(response)
    } catch (error) {
      console.log("Get Chatarter Detail Error", error)
    }
  }

  const goToEpisodes = (id) => {
    navigation.navigate("Episode", {id : id})
  }



  return (
    <View>
      {
        data.name === "" ? <View>
          <ActivityIndicator size={"large"} color={colors.primary} />
        </View> :

          <Card>
            <Card.Title style={{ color: colors.primary }}>{data.name}</Card.Title>
            <Card.Divider></Card.Divider>
            <Card.Image source={{ uri: data.image }}
              style={{ height: 350 }}
              resizeMode='contain'
            />
            <TitleValueText title={"Status"} value={data.status} />
            <TitleValueText title={"Species"} value={data.species} />
            <TitleValueText title={"Gender"} value={data.gender} />
            <Text style={styles.titleStyle}>Episodes</Text>
            <FlatList
              keyExtractor={key => key}
              data={data.episode}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => goToEpisodes(item.split("/episode/")[1])}>
                  <View style={styles.episodeContainer}>
                    <Text style={styles.episodeText}>{item.split("/episode/")[1]}</Text>
                  </View>
                </TouchableOpacity>
              }
            />

          </Card>
      }
    </View >
  )
}

export default CharacterDetail

const styles = StyleSheet.create({
  episodeContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 15
  },
  episodeText: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 18
  },
  titleStyle: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 17,
    marginTop: 7
  }
})