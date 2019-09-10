import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text
  // Dimensions,
  // Alert,
} from 'react-native'
import PropTypes from 'prop-types'
// import { Sentry, SentrySeverity } from 'react-native-sentry';
// import firebase from 'react-native-firebase';
// import styles from './styles';

export class AuthLoading extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  };

  static defaultProps = {
    navigation: {
      navigate: () => {}
    }
  };

  constructor (props) {
    super(props)
    this.bootstrapAsync()
  }

  componentDidMount () {
    // Alert.alert('Firing firebase '+ JSON.stringify(firebase.analytics()));
    // firebase
    //   .analytics()
    //   .setCurrentScreen('page/authlanding', 'AuthLoading');
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    const route = userToken ? 'App' : 'Auth'
    // Sentry.captureMessage(`App started with ${route} route`, {
    //   level: SentrySeverity.Info,
    // });
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(route) // eslint-disable-line
  }

  // Render any loading content that you like here
  render () {
    return (
      <View>
        <Text>AuthLoading</Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoading
