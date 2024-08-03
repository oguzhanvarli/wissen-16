import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseService } from '../services/baseService'
import { Card } from '@rneui/themed'
import TitleValueText from '../components/TitleValueText'
import { Image } from '@rneui/base'
import { colors } from '../theme/colors'

const Episodes = ({ route,navigation }) => {
  const { id } = route.params

  const [data, setData] = useState({})
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getEpisode()
  }, [])

  const getEpisode = async () => {
    try {
      let response = await baseService.get(`/episode/${id}`)
      setData(response)

      let characters = response.characters.map((character) => {
        return character.split("/character/")[1]
      })

      let charactersResponse = await baseService.get("/character/" + [...characters])
      setCharacters(charactersResponse)
    } catch (error) {
      console.log("Get Episode Error", error)
    }
  }

  const goToCharacter =(id) => {
    navigation.navigate("CharacterDetail", {userId : id})
  }

  return (
    <View>
      <Card>
        <Card.Title>{data.name}</Card.Title>
        <TitleValueText title={"Episode"} value={data.episode} />
        <TitleValueText title={"Date"} value={data.air_date} />
        <FlatList
          data={characters}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => goToCharacter(item.id)}>
              <Image style={styles.characterContainer} source={{ uri: item.image }} />
              <Text style={styles.characterText}>{item.name}</Text>
            </TouchableOpacity>
          }
        />
      </Card>
    </View>
  )
}

export default Episodes

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 10,
    marginTop: 20
  },
  characterContainer: {
    width: 80,
    height: 80,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: colors.primary
  },
  characterText: {
    textAlign: "center",
    fontSize: 12
  }
})