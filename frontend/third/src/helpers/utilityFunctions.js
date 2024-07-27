import CryptoJS from "crypto-js"

export const hashToken = (token) => {
  return CryptoJS.AES.encrypt(token, process.env.REACT_APP_KEY).toString()
}
export const decryptToken = (hashedDoten) => {
  return CryptoJS.AES.decrypt(hashedDoten, process.env.REACT_APP_KEY).toString(CryptoJS.enc.Utf8)
}

