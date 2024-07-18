import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { RestaurantsProps } from '..'

export default function RestaurantItem({item} : {item: RestaurantsProps}) {
  return (
    <Pressable className='flex flex-col items-center justify-center'
    onPress={() => console.log("Clicou no restaurante " + item.name)}>
        <Image 
        source={{uri: item.image}} 
        className='w-20 h-20 rounded-full'/>
        <Text className='w-20 mt-2 text-sm leading-4 text-center' numberOfLines={2}>
            {item.name}
        </Text>
    </Pressable>
  )
}