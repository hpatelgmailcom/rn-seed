import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors';
import ApplicationStyles from 'App/Theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    backgroundColor: Colors.company,
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    height: 70,
    justifyContent: 'center',
    width: 70
  },
  name: {
    color: Colors.white,
    fontSize: 48,
    marginTop: 120
  },
  signin: {
    margin: 30
  }
});
