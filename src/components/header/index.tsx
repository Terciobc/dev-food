import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'

export function Header() {
 return (
   <View className="flex flex-row items-center justify-between w-full">
      <Pressable className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
        <Ionicons name="menu" size={20} color="#121212"/>
      </Pressable>

      <View className="flex flex-col items-center justify-center">
        <Text className="text-sm text-center text-slate-800">Localização</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Recife-PE</Text>
        </View>
      </View>

      <Pressable className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
        <Feather name="bell" size={20} color="#121212"/>
      </Pressable>
  </View>
  );
}