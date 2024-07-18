import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { RestaurantItem } from './item'

export interface RestaurantsProps{
    id: string,
    name: string,
    image: string,
}

export function RestauranteList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
    useEffect(() => {
        async function getFoods(){
            const response = await fetch("http://192.168.1.103:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }
        getFoods()
    }, [])
  return (
    <View >
      <Text >
        <FlatList 
          data={restaurants}
          keyExtractor={(item) => item.id}  
          renderItem={({item}) => (<RestaurantItem item={item} key={item.id} />)} />
      </Text>
    </View>
  )
}