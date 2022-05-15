import { Text, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={text => setValue(text)}
            secureTextEntry= {secureTextEntry}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,

        paddingHorizontal: 10,
        paddingTop: 11,
        marginVertical: 5,
    }
});
export default CustomInput;