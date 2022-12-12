import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

import About from '../components/restaurantDetail/About'
import Items from '../components/restaurantDetail/MenuItems'
import BottomTabs from '../components/home/BottomTabs'

export default function RestaurantDetail({route}) {
  return (
    <View  style={{backgroundColor:"#dae2f0", flex:1}}>
      <About route={route}/>
      <Divider width={5} color={"gray"} margin={5} style={{marginHorizontal:20}}/>
      <Items/>
      <View style={{padding:1, backgroundColor:"#faecc8", marginTop:5}}>
        <BottomTabs route={route}/>
      </View>
    </View>
  )
}