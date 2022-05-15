import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const Resolving = () => {
  const center = "Bogura Center";
  const alarm = "Beeping on the motherboard";
  const date = "11:30 03-05-2021";
  const history = "Happened three times";
  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quae totam quam expedita praesentium non magni alias debitis ut animi quas, sit dignissimos, deleniti delectus? Veritatis distinctio ducimus cumque rem!";
  const image =
    "https://www.pngitem.com/pimgs/m/41-415798_doge-vector-illustration-doge-meme-vector-hd-png.png";
  const stepsTaken = ["Changed fluid", "Washed motherboard"];
  const [inputField, setInputField] = useState(false);
  const [stepsFollowed, setStepsFollowed] = useState("");

  const buttonField = () => {
    const navigation = useNavigation();
    if (!inputField) {
      return (
        <CustomButton
          title="Complete"
          onPress={() => setInputField(true)}
        ></CustomButton>
      );
    } else {
      return (
        <View style={styles.buttonStuffsContainer}>
          <Text style={styles.titleText}>
            How did you solved this problem(short)?{" "}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setStepsFollowed(text)}
            value={stepsFollowed}
          />
          <CustomButton
            title="Finish"
            onPress={() => navigation.navigate("FinishScreen")}
          ></CustomButton>
        </View>
      );
    }
  };
  return (
    <View style={styles.OuterContainer}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.InnerContainer}>
            <View style={styles.dateDiv}>
              <Text style={styles.dateText}>
                <Text style={styles.title}>Start:</Text> 31.01.2022
              </Text>
              <Text style={styles.dateText}>
                <Text style={styles.title}>End:</Text> 01.02.2022
              </Text>
            </View>
          </View>
          <View style={styles.InnerContainer}>
            <Text style={styles.text}>
              <Text style={styles.title}>Alarm:</Text> {alarm}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Date:</Text> {date}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>History:</Text> {history}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Description:</Text> {description}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Steps Taken:</Text> {stepsTaken}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Images:</Text>{" "}
            </Text>
            <View style={styles.imageDiv}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </View>
          </View>
          {buttonField()}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  imageDiv: {
    flexDirection: "row",
    marginBottom: 2,
    justifyContent: "space-evenly",
  },
  dateDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#f0c0ad",
    paddingTop: 10,
    alignItems: "center",
  },
  InnerContainer: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4d4a4a",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4d4a4a",
  },
  title: {
    textDecorationLine: "underline",
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "95%",
    backgroundColor: "white",
  },
  OuterContainer: {
    flex: 1,
    backgroundColor: "#f0c0ad",
  },
  buttonStuffsContainer: {
    width: "100%",
  },
  titleText: {
    paddingLeft: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#4d4a4a",
  },
});

export default Resolving;
