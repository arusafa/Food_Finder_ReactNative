import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { auth } from '../../firebase'
import { useState } from 'react'
import { Button } from 'react-native-elements'


export default function Login({ navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home')
      }
    })
    return unsubscribe
  }, [])
  

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log('Registered with: ',user.email)
    }
    )
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log('Logged in with: ',user.email)
    })
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Button style={styles.members} title="Team Members Page" onPress={() => navigation.navigate('TeamMembers')}/>
      
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 30, fontWeight: '700', margin: 50, textAlign:"center" }}>Login</Text>
        <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}     
        style={styles.input} />
        
        <TextInput 
        placeholder="Password" 
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry />
      </View>
  
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={[styles.button, styles.buttonOtline]}
        onPress={handleSignUp}>
          <Text style={styles.buttonOtlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f2e8'
  },
  button_signout: {
    marginTop: 10,
    width: 150,
    height: 30,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#faf0f8'

  },
  members: {
    marginTop: 50,
    width: 200,
    height: 50,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5
  },
  inputContainer: {
    marginVertical: 10,
    width: '100%'
  },
  input: {
    margin:50,
    height: 40,
    backgroundColor: '#f4edf7',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10
  },
  buttonContainer: {
    marginVertical: 10
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 25,
    width: 180,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  },
  buttonOtline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000'
  },
  buttonOtlineText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700'
  }
})