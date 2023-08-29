import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native'
import { height, width } from '../Diemensions';
import PlusButton from '../PlusButton';

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();

const ExclusiveOffers = () => {

    const exclusiveData = [
        {
            name: 'Natural Red Apple',
            price: '4.99$',
            quantity: '1kg, Price',
            image: require('../images/apple.png')
        },
        {
            name: 'Organic Bananas',
            price: '1.99$',
            quantity: '1 Dozen, Price',
            image: require('../images/banana.png')
        },
        {
            name: 'Mangos',
            price: '3.99$',
            quantity: '1kg, Price',
            image: require('../images/mango.png')
        },
        {
            name: 'Strawberries',
            price: '5.99$',
            quantity: '1kg, Price',
            image: require('../images/strawberry.png')
        },
    ]

    return (

        <View>

            <View style={styles.textView}>
                <Text style={styles.text}>
                    Exclusive Offers
                </Text>
                <TouchableOpacity>
                    <Text style={styles.btnText}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
                data={exclusiveData}
                renderItem={({ item }) => (

                    <View style={{ ...styles.productDetail }}>

                        <View style={styles.imgView}>
                            <Image source={item.image}
                                resizeMode='contain'
                                style={styles.img}
                            />
                        </View>

                        <View>
                            <Text style={styles.productText}>
                                {item.name}
                            </Text>
                            <Text style={styles.priceText}>
                                {item.quantity}
                            </Text>
                        </View>

                        <View style={styles.btnView}>
                            <Text style={styles.price}>
                                {item.price}
                            </Text>

                            <PlusButton />
                        </View>

                    </View>

                )}

            />



        </View>

    )
}

export default ExclusiveOffers

const styles = StyleSheet.create({

    flatList: {
        marginTop: height * 0.02,
    },
    textView: {
        marginTop: height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: height * 0.03,
        fontFamily: 'titli',
        color: '#000'
    },
    btnText: {
        fontSize: height * 0.02,
        fontFamily: 'abz',
        color: '#53B175'
    },
    img: {
        width: width * 0.3,
        height: height * 0.15,

    },
    productDetail: {
        width: width * 0.45,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 20,
        padding: width * 0.02,
        marginHorizontal: width * 0.015
    },
    imgView: {
        alignItems: 'center'
    },
    productText: {
        fontSize: height * 0.02,
        fontFamily: 'abz',
        color: '#000'
    },
    priceText: {
        fontSize: height * 0.015,
        fontFamily: 'nunito',
        color: '#000'
    },
    btnView: {
        margin: width * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: height * 0.03,
        fontFamily: 'titliRegular'
    }
});