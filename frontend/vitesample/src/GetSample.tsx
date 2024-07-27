import axios from 'axios'
import React, { useEffect } from 'react'
import { CharacterResponse } from './models/response/CharacterResponse'

type Props = {}

const GetSample = (props: Props) => {


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let response :CharacterResponse[] = await axios.get("https://rickandmortyapi.com/api/character")
      .then(res => res.data.results)
    console.log(response[1])
  }


  return (
    <div>GetSample</div>
  )
}

export default GetSample