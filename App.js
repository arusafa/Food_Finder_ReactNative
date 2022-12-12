import React from "react";
import { SafeAreaView } from "react-native";

import RootNavigation from "./Navigation";


export default function App() {
  return (
      <SafeAreaView style={{flex:1,  backgroundColor:"#e9f7f4", margin:5}}>
        <RootNavigation/>
      </SafeAreaView>
  );
}
