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

const Vegetables = (props) => {

    const navigation = useNavigation();

    const beveragesData = [
        {
            name: 'Potato',
            imageSource: require('./images/VegetablesProducts/potato.png'),
            price: '$ 1.0'
        },
        {
            name: 'Natural Peas',
            imageSource: require('./images/VegetablesProducts/peas.png'),
            price: '$ 1.99'
        },
        {
            name: 'Tomato',
            imageSource: require('./images/VegetablesProducts/tomato.png'),
            price: '$ 2.99'
        },
        {
            name: 'Garlic',
            imageSource: require('./images/VegetablesProducts/garlic.png'),
            price: '$ 0.99'
        },
        {
            name: 'Cucumber',
            imageSource: require('./images/VegetablesProducts/cucumber.png'),
            price: '$ 1.99'
        },
        {
            name: 'White Radish',
            imageSource: require('./images/VegetablesProducts/radish.png'),
            price: '$ 1.20'
        },
        {
            name: 'Onion',
            imageSource: require('./images/VegetablesProducts/onion.png'),
            price: '$ 2.20'
        },
        {
            name: 'Red Chili',
            imageSource: require('./images/VegetablesProducts/chili.png'),
            price: '$ 1.20'
        },
        {
            name: 'Natural Red Apple',
            imageSource: require('./images/VegetablesProducts/apple.png'),
            price: '$ 4.20'
        },
        {
            name: 'Natural Mangoes',
            imageSource: require('./images/VegetablesProducts/mango.png'),
            price: '$ 2.20'
        },
        {
            name: 'Fresh Strawberries',
            imageSource: require('./images/VegetablesProducts/strawberry.png'),
            price: '$ 3.50'
        },
        {
            name: 'Banana',
            imageSource: require('./images/VegetablesProducts/banana.png'),
            price: '$ 1.50'
        },

    ]


    return (

        <View style={styles.mainView}>

            <ProductHeader
                name={'Fruits & Vegetables'}
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

export default Vegetables;

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