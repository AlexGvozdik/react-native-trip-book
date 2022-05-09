import React from 'react'
import { View,StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, images, icons } from '../constants'

const OptionItem = ({icon,bgColor,label,onPress }) => {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={onPress}  >
      <View style={[ styles.shadow,{width:60,height:60}]} >
        <LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15, }} colors={bgColor} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
          <Image source={icon} resizeMode="cover" style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }} />
          </LinearGradient>
      </View>
                <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>{label}</Text>
    </TouchableOpacity>
  ) 
}
function Home({navigation}) {
  const [destinations, setDestinations] = React.useState([
    {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: 1,
            name: "Climbing Hills",
            img: images.climbingHills,
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
  ])

  function renderDestinations(item,index) {
    var destinationStyle = {}
    if (index===0) {
      destinationStyle={marginLeft:SIZES.padding}
    }
    return (
      <TouchableOpacity style={{marginHorizontal:SIZES.base,justifyContent:'center',...destinationStyle}} onPress={()=> navigation.navigate('DestinationDetail')}>
        <Image source={item.img} resizeMode='cover' style={{ width: SIZES.width * 0.28,
                        height: '82%',
          borderRadius: 15
        }} />
        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{flex:1,marginTop:SIZES.base, paddingHorizontal:SIZES.padding}}>
        <Image source={images.homeBanner} resizeMode='cover' style={{width:'100%',height:'100%', borderRadius:15}} />
      </View>
      <View style={{flex:1,justifyContent:'center'}}>
        <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
          <OptionItem icon={icons.airplane} bgColor={['#46aeff', '#5884ff']}  label='Flight' onPress={()=> console.log('Pressed airplane icon')} />
          <OptionItem icon={icons.train} bgColor={['#fddf90', '#fcda13']}  label='Train' onPress={()=> console.log('Pressed train icon')} />
          <OptionItem icon={icons.bus} bgColor={['#e973ad', '#da5df2']}  label='Bus' onPress={()=> console.log('Pressed bus icon')} />
          <OptionItem icon={icons.taxi} bgColor={['#fcaba8', '#fe6bba']}  label='Taxi' onPress={()=> console.log('Pressed taxi icon')} />
        </View>

            <View style={{flex:1,justifyContent:'center'}}>
        <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
          <OptionItem icon={icons.bed} bgColor={['#46aeff', '#5884ff']}  label='Bed' onPress={()=> console.log('Pressed bed icon')} />
          <OptionItem icon={icons.eat} bgColor={['#fddf90', '#fcda13']}  label='Eat' onPress={()=> console.log('Pressed eat icon')} />
          <OptionItem icon={icons.compass} bgColor={['#e973ad', '#da5df2']}  label='Compass' onPress={()=> console.log('Pressed compass icon')} />
          <OptionItem icon={icons.event} bgColor={['#fcaba8', '#fe6bba']}  label='Event' onPress={()=> console.log('Pressed event icon')} />
        </View>
      </View>
      </View>
      <View style={{flex:1}}>
        <Text style={{marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2}}>
          Destination
        </Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={destinations} keyExtractor={(item)=> item.id.toString()} renderItem={({item,index})=> renderDestinations(item,index)}
        />
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Home;