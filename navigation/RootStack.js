import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import SigninScreen from "../Screens/SigninScreen/SigninScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, combineReducers } from "redux";
import { useSelector } from "react-redux";
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
  } from "@react-navigation/drawer";

import Profile from "../Screens/Profile/Profile";
import MySolved from '../Screens/MySolved/MySolved';
import MyUpload from '../Screens/MyUpload/MyUpload';
import Resolving from '../Screens/Resolving/Resolving';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStack = () => {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
        <NavigationContainer>
        {
            user.pat === null 
            ?
            <AuthStack /> 
            :
            <Drawer.Navigator>
                <Drawer.Screen name="App" component={HomeStack} options={{headerShown: false}} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="MySolved" component={MySolved} />
                <Drawer.Screen name="MyUpload" component={MyUpload} />
                <Drawer.Screen name="Resolving" component={Resolving}/>
            </Drawer.Navigator>
        }
        </NavigationContainer>
    );

    }
export default RootStack;