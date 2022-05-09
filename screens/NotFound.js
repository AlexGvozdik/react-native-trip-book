import { View, Text } from 'react-native'
import React from 'react'

export default function NotFoundScreen() {
  return (
    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:32,fontWeight:'700',color:'red'}}>NotFound</Text>
    </View>
  )
}