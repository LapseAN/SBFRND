import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SigninScreen from "./Screens/SigninScreen/SigninScreen";
import Home from "./Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector } from "react-redux";
import signInReducer from "./store/reducers/signInReducer";
import { login } from "./store/actions";
// import AuthStack from "./navigation/AuthStack";
import HomeStack from "./navigation/HomeStack"; 
import RootStack from "./navigation/RootStack";


const rootReducer = combineReducers({
  user: signInReducer,
});
const store = createStore(rootReducer);

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  )  
}

// const MyStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   )  
// }

// const RootStack = () => {
//   const user = useSelector((state) => state.user);
//   console.log(user);
//   return (
//     <NavigationContainer>
//       {
//         user.pat === null ? <AuthStack /> : <HomeStack />
//       }
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <RootStack/>
    </Provider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
