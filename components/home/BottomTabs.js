import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 8,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Icon icon="home" text="Home" />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Icon icon="plus" text="Add" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Icon icon="user" text="Account"/>
      </TouchableOpacity>

    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity >
    <View>
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{
          marginBottom: 5,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);