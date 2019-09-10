import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Colors.company,
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  name: {
    fontSize: 48,
    marginTop: 120,
    color: Colors.white,
  },
})
