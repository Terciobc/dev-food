import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

export function Input() {
  return (
    <View className='flex-row items-center w-full gap-2 px-4 bg-transparent border rounded-full border-slate-500 h-14'>
      <Feather name='search' size={24} color="#64748b" testID='search-icon' />
      <TextInput 
      className='flex-1 w-full h-full bg-transparent'
      placeholder='Procure a sua comida...' />
    </View>
  )
}