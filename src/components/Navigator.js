import React from 'react';
import { DrawerNavigator, createStackNavigator, NavigationActions, DrawerItems } from 'react-navigation';
import { View, Image, StyleSheet } from 'react-native';
import ChallengeListScreen from '../screens/ChallengeListScreen';
import CodeScreen from '../screens/CodeScreen';
import DrawerMenu from './DrawerMenu';

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: 'black'
  }
});

export const ScreenNames = {
  HOME_SCREEN: 'Challenges',
  CODE_SCREEN: 'Code',
  EXAMPLES_SCREEN: 'EXAMPLES',
  ABOUT_SCREEN: 'ABOUT',
  FILE_OPEN_SCREEN: 'OPEN',
  FILE_SAVE_AS_SCREEN: 'SAVE AS'
};

const drawerNavigatorConfig = {
  contentComponent: DrawerMenu,
  drawerWidth: 270
};

export default createStackNavigator(
  {
    [ScreenNames.HOME_SCREEN]: {
      screen: ChallengeListScreen,
      navigationOptions: () => ({
        title: 'Challenges'
      })
    },
    [ScreenNames.CODE_SCREEN]: {
      screen: CodeScreen
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackTitle: 'Back'
    }
  }
);
// DrawerNavigator(
//   {
//     [ScreenNames.HOME_SCREEN]: {
//       screen: StackNav
//       // navigationOptions: () => ({
//       //   drawerLabel: () => null
//       // })
//     },
//     [ScreenNames.FILE_OPEN_SCREEN]: {
//       screen: ChallengeListScreen,
//       navigationOptions: () => ({
//         drawerIcon: () => <Image source={require('../../assets/open-icon.png')} style={styles.icon} />
//       })
//     },
//     [ScreenNames.FILE_SAVE_AS_SCREEN]: {
//       screen: ChallengeListScreen,
//       navigationOptions: () => ({
//         drawerIcon: () => <Image source={require('../../assets/save-icon.png')} style={styles.icon} />
//       })
//     },
//     [ScreenNames.EXAMPLES_SCREEN]: {
//       screen: ChallengeListScreen,
//       navigationOptions: () => ({
//         drawerIcon: () => <Image source={require('../../assets/examples-icon.png')} style={styles.icon} />
//       })
//     },
//     [ScreenNames.ABOUT_SCREEN]: {
//       screen: ChallengeListScreen,
//       navigationOptions: () => ({
//         drawerIcon: () => <Image source={require('../../assets/about-icon.png')} style={styles.icon} />
//       })
//     }
//   },
//   drawerNavigatorConfig
// );
