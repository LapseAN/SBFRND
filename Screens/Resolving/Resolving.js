import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from "react-redux";

const Resolving = () => {
  const [inputField, setInputField] = useState(false);
  const [stepsFollowed, setStepsFollowed] = useState("");
  const [resolvingNow, setResolvingNow] = useState([""]);
  const [alarm, setAlarm] = useState("");
  const [history, setHistory] = useState("");
  const [description, setDescription] = useState("");
  const [stepsTaken, setStepsTaken] = useState("");
  const [occuringDate, setOccuringDate] = useState("");
  const [winner_id, setWinner_id] = useState("");
  const [user_id, setUser_id] = useState("");

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.pat}`;
    axios
      .get(`https://sbfrnd.herokuapp.com/api/resolving-now/${user.user_id}`)
      .then((response) => {
        if (response.status === 200) {
          setResolvingNow(response.data);
          console.log(resolvingNow[0]);
          setAlarm(resolvingNow[0].bid.issue.alarm);
          setHistory(resolvingNow[0].bid.issue.history);
          setDescription(resolvingNow[0].bid.issue.description);
          setStepsTaken(resolvingNow[0].bid.issue.stepsTaken);
          setOccuringDate(resolvingNow[0].bid.issue.occuringDate);
          setWinner_id(resolvingNow[0].id);
          setUser_id(resolvingNow[0].user_id);
        } else {
          console.log("Empty");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [resolvingNow]);

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
            onPress={() => {
              console.log(winner_id, user_id);
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${user.pat}`;
              axios
                .post(
                  `https://sbfrnd.herokuapp.com/api/complete/${winner_id}/${user_id}`,
                  {
                    stepsFollowed: stepsFollowed,
                  }
                )
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => console.log(error.response));
              navigation.navigate("Profile");
            }}
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
              <Text style={styles.title}>Alarm:</Text>
              {alarm}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Date:</Text>
              {occuringDate}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>History:</Text>
              {history}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Description:</Text>
              {description}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.title}>Steps Taken:</Text>
              {stepsTaken}
            </Text>

            {/* <View style={styles.imageDiv}>
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
            </View> */}
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
