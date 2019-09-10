import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import AuthLoading from 'App/Containers/Auth/AuthLoading';
import Signin from 'App/Containers/Auth/Signin';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: AuthLoading,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
);

const AuthStack = createStackNavigator({
  MainScreen: Signin,
});

// const AppStack = createStackNavigator({
//   EmployeeList,
//   Actions,
//   TakePicture,
//   Confirm,
// });

// const AdminStack = createStackNavigator(
//   {
//     AdminLanding,

//     Employees, // show all employees will contain delete , show timesheet, train face
//     // LocationView: LocationView, // get all location
//     // ViewEvents: ViewEvents,     // view events
//     // Schedule, DeviceInfo, Settings, Version
//   },
//   {
//     initialRouteName: 'AdminLanding',
//   },
// );

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    // App: AppStack,
    // Admin: AdminStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(SwitchNavigator)


// https://github.com/react-navigation/react-navigation/issues/1127