import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { height, width } from './Diemensions'

const PrimaryButton = ({buttonName, onPress}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >

                <Text style={styles.btnText}>
                    {buttonName}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: '#526D82',
        width: width * 0.9,
        paddingVertical: height * 0.03,
        borderRadius: height * 0.015,
    },
    btnText: {
        color: '#fff',
        fontSize: height * 0.025,
        textAlign: 'center',
        fontFamily: 'abz'
    },
    btnTotalText: {
        color: '#fff',
        backgroundColor: '#41644A',
        width: width * 0.15,
        padding: width * 0.01,
        textAlign: 'center',
        borderRadius: width * 0.01,
    }
})