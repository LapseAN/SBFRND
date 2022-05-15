import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";
import ModalPicker from "../../components/ModalPicker/ModalPicker";
import CustomInput from "../../components/CustomInput/CustomInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "../../components/CustomButton/CustomButton";


const InputProblem = () => {
    const [chooseData, setChooseData] = useState("Select an option");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [stepsTaken, setStepsTaken] = useState("");
    const [problemHistory, setProblemHistory]= useState("");
    const [description, setDescription] = useState("");

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const setData = (data) => {
        setChooseData(data);
      };

    const showDatepicker = () => {
    showMode("date");
    };

    const showTimepicker = () => {
    showMode("time");
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        console.log(date);
      };
    

    return (
      <SafeAreaView style={styles.container}>
            <Text style={styles.labelText}>What is the alarm</Text>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => changeModalVisibility(true)}
            >
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                anumationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}
            >
                <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
                ></ModalPicker>
            </Modal>

            <Text style={styles.labelText}>When did it happen</Text>
            <View>
                <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
                </View>
                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                )}
            </View>

            <Text style={styles.titleText}>Description</Text>
            <CustomInput placeholder="Enter Description Here" value={description} setValue={setDescription} />

            <Text style={styles.titleText}>Problem History</Text>
            <CustomInput placeholder="Enter Problem History Here" value={problemHistory} setValue={setProblemHistory} />

            <Text style={styles.titleText}>Steps taken by the engineer</Text>
            <CustomInput placeholder="Enter Steps Taken Here" value={stepsTaken} setValue={setStepsTaken} />

            <View style={{ alignItems: "center" }}>
                <CustomButton title="Submit" onPress={()=>{}} />
            </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
      },
      touchableOpacity: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      labelText: {
        paddingLeft: 12,
        fontSize: 16,
        fontWeight: "bold",
        color: "#4d4a4a",
      },
      titleText: {
        paddingLeft: 12,
        fontSize: 16,
        fontWeight: "bold",
        color: "#4d4a4a",
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

export default InputProblem;