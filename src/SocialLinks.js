import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { height, width } from './Diemensions'

const SocialLinks = ({name,}) => {
    const data= [
        {
            id: 1,
            name: 'facebook',
            color: '#4267B2'
        },
        {
            id: 2,
            name: 'google',
            color: '#4285F4'
        },
        {
            id: 3,
            name: 'instagram',
            color: '#e95950'
        },
        {
            id: 4,
            name: 'twitter',
            color: '#00acee'
        },
    ]
  return (
    <View style={styles.mainView}>
        <Text style={styles.mainText}>
            {name}
        </Text>

        <FlatList
        
        horizontal={true}
        data={data}
        renderItem={({item})=>
        <View style={styles.contentView}>

            <TouchableOpacity style={styles.subView}>

                <Icon name={item.name} size={width*0.08} color={item.color} />

            </TouchableOpacity>

        </View>
    }

        />

    </View>
  )
}

export default SocialLinks

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        marginVertical: width*0.03,
    },
    mainText: {
        fontSize: width*0.05,
        fontFamily: 'abz',
        color: '#526D82'
    },
    contentView: {
        flexDirection: 'row',
        marginHorizontal: width*0.05,
        marginVertical: width*0.03
    },
    subView: {
        backgroundColor: '#DDE6ED',
        width: width*0.15,
        height: width*0.15,
        borderRadius: width*0.075,
        justifyContent: 'center',
        alignItems: 'center'
    }

})