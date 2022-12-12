import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function TeamMembers({ navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.about}>
        <Button style={styles.about} title="Home Page" onPress={() => navigation.navigate('Login')}/>
    </View>

    <View>
    <Text style={styles.title}>❂Team Members❂</Text>
    <Text style={styles.subtitle}>George Brown College</Text>
    <Text style={styles.subtitle}>Comp3074 - Mobile-Application</Text>
    <Text style={styles.subtitle}>Safa Aru - 101331910</Text>
    <Text style={styles.subtitle}>Hakan Inel - 101213098</Text>
    <Text style={styles.subtitle}>Onur Korkmaz - 101303363</Text>
    <Text style={styles.subtitle}>Ahmet Buyukbas - 101304595 </Text>
    </View>

</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    about: {
        backgroundColor: '#f0faf3',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        margin: 50,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700',
        margin: 10,
        textAlign: 'center'
    }
});