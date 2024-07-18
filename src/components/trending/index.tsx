import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { CardHorizontalFood } from './food'

export interface foodProps{
    id: string,
    name: string,
    price: number,
    time: string,
    delivery: number,
    rating: number,
    image: string,
    restaurantId: string;
}

export function TrendingFoods() {
    const [foods, setFoods] = useState<foodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.1.103:3000/foods")
            const data = await response.json()
            setFoods(data)
        }
        getFoods();
    }, [])

  return (
    <FlatList 
        horizontal={true}
        data={foods}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight:16}}
        showsHorizontalScrollIndicator={false}
        renderItem={ ({item}) => <CardHorizontalFood food={item} />} />
  )
}