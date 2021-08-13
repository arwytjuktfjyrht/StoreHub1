import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RSS from './screens/RSS';
import WSS from './screens/WSS';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  RSS:RSS,
  WSS:WSS
},{
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcons:()=>{
      const routeName=navigation.state.routeName
      if(routeName==='WSS'){
        return(
          <Image source={require('./assets/PRO+C70+Images/write.png')} style={{width:40,height:40}}/>
        )
      } else if(routeName==='RSS'){
        return(
          <Image source={require('./assets/PRO+C70+Images/read.png')} style={{width:40,height:40}}/>
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
