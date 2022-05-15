import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from '../../components/CustomButton/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions';

const SigninScreen = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = () => {
      console.log(username, password);
        const userCredential = {
          email: username,
          password: password          
        };

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userCredential)
        };
        
        fetch('http://sbfrnd.herokuapp.com/api/login', requestOptions)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            dispatch(login(user));
        })

        }

    return (
      <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "crimson" }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://www.sbfus.org/images/logo.png",
              }}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}></CustomInput>
          <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
          <TouchableOpacity style={{ alignItems: "flex-start", width: "100%" }}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            {/* <Button
              
              name="Sign In"
              onPress={signInButtonHandler}
            /> */}
            <CustomButton title="Sign In" onPress={signInHandler}></CustomButton>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    alignItems: "center",
    backgroundColor: "crimson",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 15,
    width: "100%",
    borderRadius: 5,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
    marginTop: "10%",
    width: "95%",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    paddingTop: 30,
    borderRadius: 10,
    paddingBottom: 30,
  },
  tinyLogo: {
    width: 200,
    height: 80,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    width: "50%",
    padding: 5,
    borderRadius: 5,
  },
  button: {
    width: "30%",
    borderWidth: 1,
    backgroundColor: "crimson",
  },
  settingsImage: {
    width: 200,
    height: 150,
    marginTop: 50,
  },
})

export default SigninScreen;