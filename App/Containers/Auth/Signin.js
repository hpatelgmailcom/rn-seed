import React from 'react'
import { Text, View, Image } from 'react-native'
import Style from './AuthStyle'
import { Images } from 'App/Theme'

export default class Signin extends React.Component {
  render() {
    return (
      <View>
        <View style={Style.logo}>
          <Text>Email:</Text>
          <Text>Password</Text>
        </View>
      </View>
    )
  }
}
