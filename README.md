


# React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

[React Native boilerplate](https://github.com/thecodingmachine/react-native-boilerplate_ with additonal liberties.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is extremely documented so that each piece of code that lands in your application can be understood and used.

** NOTE: Additional documentation can be found in nested directories
Additional libraries.

```

npm install --save i18n-js
npm install react-native-share --save
npm install --save react-native-push-notification
npm i react-native-app-intro-slider --save
npm install --save @sentry/react-native
npm install --save react-native-vector-icons
npm install --save react-native-copilot
npm install --save react-native-svg
npm install —save i18n-js
npm install —save react-native-config
npm install --save react-native-device-info
npm install --save moment
npm install moment-timezone --save
npm install --save validate.js
```

## Architecture

The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

Key differences is we are using ducks pattern

- **Presentational components are separated from containers** (aka "screens").

    Presentational components are small components that are concerned with *how things look*. Containers usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.
    
    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

    When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.
    
    With Redux, state is shared using global *stores*, and changes are predictable: *actions* are applied by *reducers* to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.
    
    If you are interested you can [read more about it here](https://redux.js.org/introduction/motivation).
    
- **Application side-effects (API calls, etc.) are separated from UI and state manipulation using [Redux Saga](https://redux-saga.js.org/)**.

    Using Redux Saga has two benefits: keeping application side-effects and related business logic out of UI components, as well as executing that logic in an asynchronous way without ending in callback hell.
    
    Sagas are triggered by Redux actions and can also trigger Redux actions to alter state. By using JavaScript generators (`yield`), sagas are written in a synchronous-like manner while still executing asynchronously.

## Content

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.59.9**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.6.0) with a [`NavigationService`](App/Services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to facilitate using Redux
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The boilerplate includes an example (displaying fake user data) from UI components to the saga. The example is easy to remove so that it doesn't get in the way.

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Config`](App/Config): configuration of the application
- [`App/Containers`](App/Containers): container components, i.e. the application's screens
- [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/Navigators`](App/Navigators): react navigation navigators 
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Services`](App/Services): application services, e.g. API clients
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Updates

The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)


## Using the boilerplate

To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: `rm -rf .git/`
- install the npm dependencies by running `yarn`
- rename the React Native project to your own project name: `yarn run rename -- <YourProjectName>` (the default name is `Boilerplate`)
- remove the LICENSE file and the "License" section from the README if your project is not open source
- run `cp App/Config/index.dev.js App/Config/index.js` to start with development configuration

Feel free to remove the section "Using the boilerplate" from the README (you will not need it anymore in your project). You are encouraged to keep the rest of the documentation in your project so that it is self-explanatory.

You can now create a new git repository for your project (using `git init`) and create the first commit.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- create your [configuration file `App/Config/index.js`](App/Config) from `index.dev.js` (in you are in dev environment) and fill the missing values
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)
- `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Useful documentation

### Deployment

- Using [Fastlane](https://fastlane.tools/) to automate builds and store deployments (iOS and Android)
  - [Distributing beta builds](docs/beta%20builds.md)

### Package dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only) 
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)
  
  
## Troubleshooting

### App fails to start after renaming

If your applicaiton fails to start after using the `yarn run rename` command, please take a look at [this issue](https://github.com/thecodingmachine/react-native-boilerplate/issues/34)


## Alternative boilerplates

We looked into existing boilerplates before starting this project, and while many of them are awesome, we did not find what we were looking for.

The most popular is [mcnamee's Starter Kit](https://github.com/mcnamee/react-native-starter-kit), which is unfortunately [limited by *Expo*](https://facebook.github.io/react-native/docs/getting-started#caveats) and misses Redux Saga.

If we look at the rest (and ignore unmaintained projects), many popular boilerplates are too opinionated: they include 3rd party services or very strong architecture choices that we are not comfortable with. To name a few: [Snowflake](https://github.com/bartonhammond/snowflake) runs with a Hapi Server running on Redhat OpenShift, [Hasura's boilerplate](https://github.com/hasura/react-native-auth-boilerplate) uses Hasura's SaaS for authentication, [Apollo's StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is targeted at GraphQL using Apollo, the [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) targets Meteor…

Finally some did not contain the architecture we are looking for (the separation of concerns with Redux, Sagas, etc.), for example [re-start](https://github.com/react-everywhere/re-start).

One interesting exception is [Ignite IR Boilerplate "Andross"](https://github.com/infinitered/ignite-ir-boilerplate-andross), but after consideration we decided not to use it because of the large amount of unnecessary code/components it provided.


## Runnig Rename commands

```
> AirClockApp@0.0.1 rename /Users/hiren/codebin/ios/clockapp
> react-native-rename "PunchClock"

/ios/PunchClock RENAMED
/ios/PunchClock-tvOS RENAMED
/ios/PunchClock-tvOSTests RENAMED
/ios/PunchClock.xcodeproj RENAMED
/ios/PunchClock.xcodeproj/xcshareddata/xcschemes/PunchClock-tvOS.xcscheme RENAMED
/ios/PunchClock.xcodeproj/xcshareddata/xcschemes/PunchClock.xcscheme RENAMED
/ios/PunchClockTests RENAMED
/ios/PunchClockTests/PunchClockTests.m RENAMED
mv: no such file or directory: /Users/hiren/codebin/ios/clockapp/ios/AirClockApp.xcworkspace
Ignore above error if this file doesn't exist
mv: no such file or directory: /Users/hiren/codebin/ios/clockapp/ios/PunchClock/AirClockApp.entitlements
Ignore above error if this file doesn't exist
/android/app/src/main/res/values/strings.xml MODIFIED
/index.js MODIFIED
/ios/PunchClock/Base.lproj/LaunchScreen.xib MODIFIED
/ios/PunchClock/Info.plist MODIFIED
/package.json MODIFIED
/app.json MODIFIED
/ios/PunchClock.xcodeproj/project.pbxproj MODIFIED
/ios/PunchClock.xcodeproj/xcshareddata/xcschemes/PunchClock-tvOS.xcscheme MODIFIED
/ios/PunchClock.xcodeproj/xcshareddata/xcschemes/PunchClock.xcscheme MODIFIED
/ios/PunchClock/AppDelegate.m MODIFIED
/android/settings.gradle MODIFIED
/ios/PunchClockTests/PunchClockTests.m MODIFIED
/app.json MODIFIED
/android/app/src/main/java/com/punchclock BUNDLE INDENTIFIER CHANGED
/android/app/BUCK MODIFIED
/android/app/src/main/java/com/punchclock/MainActivity.java MODIFIED
/android/app/src/main/java/com/punchclock/MainApplication.java MODIFIED
/android/app/src/main/java/com/punchclock/MainActivity.java MODIFIED
/android/app/build.gradle MODIFIED
/android/app/src/main/java/com/punchclock/MainApplication.java MODIFIED
/android/app/src/main/AndroidManifest.xml MODIFIED
Done removing previous bundle directory.
Done removing builds.
APP SUCCESSFULLY RENAMED TO "PunchClock"! 🎉 🎉 🎉
Please make sure to run "watchman watch-del-all" and "npm start --reset-cache" before running the app. 
```
