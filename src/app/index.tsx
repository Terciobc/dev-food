import {  View, ScrollView } from "react-native";
import Constants from "expo-constants"

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Input } from "../components/input";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestauranteList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
       <View className="w-full px-5 mt-10" style={{marginTop: statusBarHeight + 10}}>
        <Header />

        <Banner />

        <Input  />
      </View>
        <Section 
        size="text-2xl" 
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais")} />

        <TrendingFoods  />

        <Section 
          size="text-xl" 
          name="Famosos no DevFood"
          label="Veja todos"
          action={() => console.log("Clicou no veja mais")} />
        
        <Restaurants  />

        <Section  
        name="Restaurantes"
        label="Veja todos"
        action={ () => console.log("Clicou no Restaurante")}
        size="text-xl"
        />

        <RestauranteList  />
        
      </ScrollView>
    </GestureHandlerRootView>
    
  );
}
