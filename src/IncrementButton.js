import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import { height, width } from './Diemensions'

const IncrementButton = () => {

    const [data, setData] = useState(1);

    const incrementData = () => {
        
        setData(data+1);
    }
    const decrementData = () => {
        if (data == 1) {
            Alert.alert('Please Add Some Quantity...')
        }
        else {
            
            setData(data-1)
        }
    }

    return (
        <View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={styles.incrementView}>
                    <TouchableOpacity
                        style={styles.decrementBtn}
                        onPress={decrementData}
                    >

                        <Text style={{ fontSize: width * 0.05, color: '#fff' }}>-</Text>

                    </TouchableOpacity>
                    <Text style={styles.quantity}>
                        {data}
                    </Text>
                    <TouchableOpacity
                        style={styles.incrementBtn}
                        onPress={incrementData}
                    >

                        <Text style={{ fontSize: width * 0.05, color: '#fff' }}>+</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default IncrementButton

const styles = StyleSheet.create({
    incrementView: {
        flexDirection: 'row',
        gap: width * 0.06
    },
    incrementBtn: {
        paddingHorizontal: width * 0.03,
        borderRadius: width * 0.01,
        backgroundColor: '#53B175'
    },
    decrementBtn: {
        paddingHorizontal: width * 0.03,
        borderRadius: width * 0.01,
        backgroundColor: 'red'
    },
    quantity: {
        borderWidth: 1,
        paddingHorizontal: width * 0.03,
        paddingVertical: width * 0.01,
        borderRadius: width * 0.01,
        textAlign: 'center'
    },
});