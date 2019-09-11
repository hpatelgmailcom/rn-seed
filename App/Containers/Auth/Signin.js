import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { TextField, Button } from 'material-bread';
import Style from './AuthStyle';

export default class Signin extends React.Component {
  state = {
    username: '',
    password: ''
  };
  render () {
    return (
      <View>
        <View style={Style.signin}>
          <Text>Login</Text>
          <TextField
            label={'Email'}
            value={this.state.email}
            onChangeText={value => this.setState({ username: value })}
            autoCompleteType="username"
          />
          <TextField
            label={'Password'}
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
            autoCompleteType="password"
            secureTextEntry
          />
          <Button
            text={'Login'}
            type="flat"
            loading={this.state.loading}
            color={'#00BCD4'}
            onPress={() => this.setState({ loading: true })}
          />
        </View>
      </View>
    );
  }
}
