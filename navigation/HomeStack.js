import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import SigninScreen from "../Screens/SigninScreen/SigninScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home/Home";
import ProblemDetails from "../Screens/ProblemDetails/ProblemDetails";
import InputProblem from "../Screens/InputProblem/InputProblem";
import ProblemOnProcess from "../Screens/ProblemOnProcess/ProblemOnProcess";
import Profile from "../Screens/Profile/Profile";
import { Entypo } from "@expo/vector-icons";
import BiddingRequest from "../Screens/BiddingRequest/BiddingRequest";
import Solved from "../Screens/Solved/Solved";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Entypo name="list" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => {
                navigation.navigate("Solved");
              }}
            >
              <Ionicons name="checkmark-done-circle" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="ProblemDetails" component={ProblemDetails} />
      <Stack.Screen name="InputProblem" component={InputProblem} />
      <Stack.Screen name="ProblemOnProcess" component={ProblemOnProcess} />
      <Stack.Screen name="BiddingRequest" component={BiddingRequest} />
      <Stack.Screen name="Solved" component={Solved} />
    </Stack.Navigator>
  );
};

export default HomeStack;
