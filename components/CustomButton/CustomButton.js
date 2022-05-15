import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from 'react'

const CustomButton = ({onPress, title}) => {
    return (
        <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
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

export default CustomButton;