import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import React from 'react'
import { height, width } from './Diemensions'
import { useNavigation } from '@react-navigation/native'
import PlusButton from './PlusButton'
import ProductHeader from './ProductHeader'

const Backery = (props) => {

    const navigation = useNavigation();

    const beveragesData = [
        {
            name: 'Choclate Cake',
            imageSource: require('./images/BackeryProducts/cCake1.png'),
            price: '$ 2.99'
        },
        {
            name: 'Mixed Choclate Cake',
            imageSource: require('./images/BackeryProducts/mixedCake.png'),
            price: '$ 3.99'
        },
        {
            name: 'Special Choclate Cake',
            imageSource: require('./images/BackeryProducts/sCake.png'),
            price: '$ 5.99'
        },
        {
            name: 'Cup Cake',
            imageSource: require('./images/BackeryProducts/cupCake.png'),
            price: '$ 0.99'
        },
        {
            name: 'Dairy Milk',
            imageSource: require('./images/BackeryProducts/dairymilk.png'),
            price: '$ 1.20'
        },
        {
            name: 'Kit Kat',
            imageSource: require('./images/BackeryProducts/kitkat.png'),
            price: '$ 1.20'
        },
        {
            name: 'Milka',
            imageSource: require('./images/BackeryProducts/milka.png'),
            price: '$ 1.50'
        },
        {
            name: 'Snickers',
            imageSource: require('./images/BackeryProducts/snickers.png'),
            price: '$ 0.50'
        },
        {
            name: '5 Star',
            imageSource: require('./images/BackeryProducts/star.png'),
            price: '$ 0.50'
        },
        {
            name: 'Oreo Biscuit',
            imageSource: require('./images/BackeryProducts/oreo.png'),
            price: '$ 0.50'
        },
        {
            name: 'Tuc Biscuit',
            imageSource: require('./images/BackeryProducts/tuc.png'),
            price: '$ 0.50'
        },
        {
            name: 'Lays Chips',
            imageSource: require('./images/BackeryProducts/lays1.png'),
            price: '$ 1.0'
        },
        {
            name: 'Lays Chips',
            imageSource: require('./images/BackeryProducts/lays2.png'),
            price: '$ 1.0'
        },
        {
            name: 'Doritos',
            imageSource: require('./images/BackeryProducts/doritos.png'),
            price: '$ 1.0'
        },
        {
            name: 'Funyuns',
            imageSource: require('./images/BackeryProducts/funyuns.png'),
            price: '$ 1.0'
        },

    ]


    return (

        <View style={styles.mainView}>

            <ProductHeader
                name={'Backery and Snacks'}
                navOnPress={() => navigation.goBack()}
            />

            <FlatList

                showsVerticalScrollIndicator={false}

                contentContainerStyle={styles.flatList}

                numColumns={2}

                data={beveragesData}

                renderItem={({ item }) =>

                    <View style={styles.contentView}>

                        <Image source={item.imageSource}
                            style={styles.img}
                            resizeMode='contain'
                        />

                        <Text style={styles.nameText}>
                            {item.name}
                        </Text>

                        <View style={styles.priceView}>

                            <Text style={styles.price}>
                                {item.price}
                            </Text>

                            <PlusButton />

                        </View>

                    </View>

                }

            />

        </View>
    )
}

export default Backery;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#fff',
        padding: width * 0.02,
        width: width * 1,
        height: height * 1,
        paddingBottom: height * 0.05,
    },
    contentView: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.42,
        height: height * 0.3,
        borderRadius: height * 0.01,
        borderWidth: 1,
        borderColor: '#53B175',
        marginHorizontal: width * 0.05,
    },
    nameText: {
        fontFamily: 'abz',
        color: '#000',
        textAlign: 'center'
    },
    flatList: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.95,
        marginTop: height * 0.01,
        gap: width * 0.1,
        paddingBottom: height * 0.05
    },
    img: {
        width: width * 0.3,
        height: height * 0.15,
    },
    priceView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: width * 0.1,
    },
    price: {
        fontSize: width * 0.05,
        fontFamily: 'abz',
        color: '#000'
    }

})