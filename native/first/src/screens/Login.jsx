import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import { colors } from '../theme/colors'

const loginScheama = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!")
})

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex: 1}} source={require("../assets/images/login-bg.jpg")}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => navigation.navigate("Home")}
          validationSchema={loginScheama}
        >
          {
            ({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
              <View style={{marginTop: 250}}>
                <TextInput
                  value={values.username}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  placeholder='Username'
                  style={styles.input}
                />
                {
                  touched.username && errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
                }
                <TextInput
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder='Password'
                  secureTextEntry
                  style={styles.input}
                />
                {
                  touched.password && errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
                }
                <View style={styles.buttonContainer}>
                  <Button title='Login' onPress={handleSubmit} color={colors.primary} />
                </View>
              </View>
            )
          }
        </Formik>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: colors.primary,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5
  },
  buttonContainer: {
    width: 100,
    marginHorizontal: "auto"
  },
  errorText: {
    color: "white",
    marginLeft: 22
  }
})