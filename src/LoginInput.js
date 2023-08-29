import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { width } from './Diemensions'

const LoginInput = ({name,onChangeText,security,value}) => {
  return (
    <View>
      <TextInput
        placeholder={name}
        placeholderTextColor={'#000'}
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={security}
        value={value}
      />
    </View>
  )
}

export default LoginInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#DDE6ED',
        marginHorizontal: width*0.05,
        marginVertical: width*0.01,
        borderRadius: width*0.02,
        padding: width*0.03,
        fontSize: width*0.05,
        fontFamily: 'abz'
    },
    
})