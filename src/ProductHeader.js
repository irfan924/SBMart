import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { height, width } from './Diemensions'

const ProductHeader = ({ navOnPress, filterOnPress, name }) => {
    return (
        <View style={styles.headerView}>

            <TouchableOpacity
                onPress={navOnPress}
            >

                <Icon name='chevron-left' size={width * 0.08} color='#526D82' />

            </TouchableOpacity>

            <Text style={styles.headerText}>
                {name}
            </Text>

            <TouchableOpacity
                onPress={filterOnPress}
            >

                <Image
                    source={require('./images/filter.png')}
                    style={styles.filterImg}
                    resizeMode='contain'
                />

            </TouchableOpacity>

        </View>
    )
}

export default ProductHeader

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: height * 0.03,
        fontFamily: 'titli',
        color: '#000'
    },
    filterImg: {
        width: width * 0.08,
        height: width * 0.08,
        tintColor: '#526D82'
    }
})