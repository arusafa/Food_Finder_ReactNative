import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { auth } from "../firebase";

const YELP_API_KEY =
    "D8VMZFXnfUnt99AzcyQdbNkMnyVupQ2SZiFD45jSdvePDhNewZ4RMlaiCxMq36Z0Qfrqtu0_lRtptY423Gq_XcGbfWjiuWV45fHb8s_6UTOL7_inVxCXKB06UV6UY3Yx"

export default function Home({navigation}) {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const [city, setCity] = useState("Toronto");

    const getRestaurantsFromYelp = () => {
        
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        };
        
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {setRestaurantData(json.businesses)})
        };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    const handleSignOut = () => {
      auth
      .signOut()
      .then(() => {
        navigation.navigate('Login')
        console.log('Signed Out')
      })
    }

  return (
    <SafeAreaView style={{backgroundColor:"#faecc8",flex:1, margin:8}}>
      <View>
        <Text style={{marginTop:10, fontWeight:"700"}}>Email:{auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button_signout}
        onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Divider width={2} color={"gray"} margin={5} />
      <View style={{backgroundColor: "#fff", padding:15}}>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView style={{backgroundColor:"#faecc8", margin:5}} showsVerticalScrollIndicator={false}>
        <RestaurantItems 
        restaurantData={restaurantData}
        navigation={navigation}
        />
      </ScrollView>
      <Divider width={2} color={"gray"} margin={5} />
      <BottomTabs
      navigation={navigation}/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_signout: {
    marginTop: 10,
    width: 100,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e4f2e8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});