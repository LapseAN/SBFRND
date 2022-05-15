import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import SigninScreen from "../Screens/SigninScreen/SigninScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const AuthStack = () => {
    
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={SigninScreen} />
        </Stack.Navigator>
      )
}


export default AuthStack;