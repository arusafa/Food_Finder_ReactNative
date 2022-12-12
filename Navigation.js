import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

import Login from "./screens/user/Login"
import TeamMembers from './screens/user/TeamMembers'

export default function Navigation() {

    const Stack = createStackNavigator()

    // const screenOptions = {

    //     headerShown:false
    // }

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='TeamMembers' component={TeamMembers}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}