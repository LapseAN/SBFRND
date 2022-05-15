import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../components/CustomButton/CustomButton";

const BiddingRequest = (props) => {
  const [timeToFix, setTimeToFix] = useState("");
  const [sendBackTime, setSendBackTime] = useState("");
  const [needSupport, setNeedSupport] = useState("");
  const [needSpare, setNeedSpare] = useState("");
  const [possibleCost, setPossibleCost] = useState("");
  const [haveExistingTask, setHaveExistingTask] = useState("");

  const timeToFixChangeHandler = (entered) => {
    setTimeToFix(entered);
    console.log(timeToFix);
  };

  const sendBackTimeCangeHandler = (entered) => {
    setSendBackTime(entered);
    console.log(sendBackTime);
  };

  const needSupportCangeHandler = (entered) => {
    setNeedSupport(entered);
    console.log(needSupport);
  };

  const needSpareCangeHandler = (entered) => {
    setNeedSpare(entered);
    console.log(needSupport);
  };

  const possibleCostCangeHandler = (entered) => {
    setPossibleCost(entered);
    console.log(needSpare);
  };

  const haveExistingTaskCangeHandler = (entered) => {
    setHaveExistingTask(entered);
    console.log(possibleCost);
  };
  return (
    // <SafeAreaView>
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          How much time you need to fix this issue?{" "}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={timeToFixChangeHandler}
          value={timeToFix}
        />

        <Text style={styles.titleText}>Time to send back the machine: </Text>
        <TextInput
          style={styles.input}
          onChangeText={sendBackTimeCangeHandler}
          value={sendBackTime}
        />

        <Text style={styles.titleText}>
          Do you need other engineer's support?{" "}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={needSupportCangeHandler}
          value={needSupport}
        />

        <Text style={styles.titleText}>Do you need any spare? </Text>
        <TextInput
          style={styles.input}
          onChangeText={needSpareCangeHandler}
          value={needSpare}
        />
        <Text style={styles.titleText}>What is the possible cost? </Text>
        <TextInput
          style={styles.input}
          onChangeText={possibleCostCangeHandler}
          value={possibleCost}
        />
        <Text style={styles.titleText}>Do you have existing tasks? </Text>
        <TextInput
          style={styles.input}
          onChangeText={haveExistingTaskCangeHandler}
          value={haveExistingTask}
        />
      </View>
      <CustomButton title="Submit"></CustomButton>
    </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    paddingLeft: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#4d4a4a",
  },
  container: {
    marginTop: 10,
  },
  KeyboardAvoidingContainer: {
    flex: 1,
  },
  button: {
    height: 60,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "crimson",
    borderRadius: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default BiddingRequest;
