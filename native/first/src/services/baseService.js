import axios from "axios"

export const baseService = {
  get: async (endPoint) => {
    return axios.get(endPoint).then(res => res.data)
      .catch(err => err)
  }
}