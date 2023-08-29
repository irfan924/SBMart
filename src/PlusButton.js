import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { width } from './Diemensions'
//import navigation from '@react-navigation/native';


const PlusButton = ({onPress}) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#526D82',
                    width: width * 0.1,
                    height: width * 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: width * 0.05
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: '#DDE6ED',
                        fontSize: width*0.07,
                        textAlign: 'center'
                    }}
                >
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlusButton
