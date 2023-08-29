import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native'
import { height, width } from '../Diemensions';
import PlusButton from '../PlusButton';

const BestSelling = () => {

    const bestSelling = [
        {
            name: 'Red Chilli',
            quantity: '1kg, Price',
            price: '1.99 $',
            image: require('../images/chili.png')
        },
        {
            name: 'Tomato',
            quantity: '1kg, Price',
            price: '2.99 $',
            image: require('../images/tomato.png')
        },
        {
            name: 'Mutton',
            quantity: '1kg, Price',
            price: '5.99 $',
            image: require('../images/mutton.png')
        },
        {
            name: 'Broiler Chicken',
            quantity: '1kg, Price',
            price: '3.99 $',
            image: require('../images/chicken.png')
        },
    ]

    return (

        <View style={{ marginBottom: width * 0.03 }}>

            <View style={styles.textView}>
                <Text style={styles.text}>
                    Best Selling
                </Text>
                <TouchableOpacity>
                    <Text style={styles.btnText}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.flatList}

                data={bestSelling}

                renderItem={({ item }) => (

                    <View style={styles.productDetail}>
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

export default BestSelling

const styles = StyleSheet.create({

    flatList: {
        marginTop: height*0.02,
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
    imgView: {
        alignItems: 'center'
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