import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { width } from './Diemensions'

const LeftButton = ({onPress}) => {
    return (
        <View style={styles.viewbtn}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >

                <Icon name= 'chevron-left' size={width*0.08} color= '#526D82' />

            </TouchableOpacity>
        </View>
    )
}

export default LeftButton

const styles = StyleSheet.create({
    btn: {
        width: width*0.1,
        height: width*0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width*0.05
    },
    viewbtn: {
        position: 'absolute',
        top: width*0.01,
        left: width*0.02,
        zIndex: 99
    }
});