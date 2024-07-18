import { View, Text, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { RestaurantsProps } from '..'

export function RestaurantItem({item}: {item: RestaurantsProps}) {
  return (
    <Pressable className='flex flex-row items-center gap-2 mb-4 ml-5'>
        <Image source={{uri: item.image}}
        className='w-20 h-20 rounded-full' />

        <View className='flex'>
            <Text className='gap-2 text-base font-bold leading-4 text-black' numberOfLines={2}>
                {item.name}
            </Text>

            <View className='flex-row items-center'>
                <Ionicons name='star' size={14} color="#ca8a04" />
                <Text>4.5</Text>
            </View>
        </View>
    </Pressable>
  )
}