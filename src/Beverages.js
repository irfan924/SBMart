import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import React from 'react'
import { height, width } from './Diemensions'
import PlusButton from './PlusButton'

import {useNavigation} from '@react-navigation/native'

import ProductHeader from './ProductHeader'


const Beverages = (props) => {

  const navigation = useNavigation();

  const beveragesData = [
    {
      name: 'Diet Coke',
      imageSource: require('./images/BeveragesProducts/dietCoke.png'),
      price: '$ 1.99'
    },
    {
      name: 'Orange Juice',
      imageSource: require('./images/BeveragesProducts/orangeJuice.png'),
      price: '$ 2.99'
    },
    {
      name: 'Mango Juice',
      imageSource: require('./images/BeveragesProducts/mangoJuice.png'),
      price: '$ 2.99'
    },
    {
      name: 'Coke Can',
      imageSource: require('./images/BeveragesProducts/coke.png'),
      price: '$ 1.50'
    },
    {
      name: 'Pepsi Can',
      imageSource: require('./images/BeveragesProducts/pepsi.png'),
      price: '$ 1.50'
    },
    {
      name: 'Fanta Can',
      imageSource: require('./images/BeveragesProducts/fanta.png'),
      price: '$ 1.99'
    },
    {
      name: 'Monster Energy',
      imageSource: require('./images/BeveragesProducts/monster.png'),
      price: '$ 3.99'
    },
    {
      name: 'Dr Pepper Can',
      imageSource: require('./images/BeveragesProducts/diet.png'),
      price: '$ 2.99'
    },
    {
      name: 'Red Bull',
      imageSource: require('./images/BeveragesProducts/redbull.png'),
      price: '$ 2.99'
    },
    {
      name: 'Mineral Water',
      imageSource: require('./images/BeveragesProducts/water.png'),
      price: '$ 1.0'
    },
  ]


  return (

    <View style={styles.mainView}>

      <ProductHeader
        name={'Beverages'}
        navOnPress={() => navigation.goBack() }
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

export default Beverages

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