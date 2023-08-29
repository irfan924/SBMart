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

const Meat = (props) => {

  const navigation = useNavigation();

  const beveragesData = [
    {
      name: 'Fish Meat',
      imageSource: require('./images/MeatandFishProducts/fish.png'),
      price: '$ 3.99'
    },
    {
      name: 'Camel Meat',
      imageSource: require('./images/MeatandFishProducts/camel.png'),
      price: '$ 6.5'
    },
    {
      name: 'Bull Meat',
      imageSource: require('./images/MeatandFishProducts/cow.png'),
      price: '$ 4.99'
    },
    {
      name: 'Sheep Meat',
      imageSource: require('./images/MeatandFishProducts/sheep.png'),
      price: '$ 4.50'
    },
    {
      name: 'Deer Meat',
      imageSource: require('./images/MeatandFishProducts/deer.png'),
      price: '$ 1.50'
    },

  ]


  return (

    <View style={styles.mainView}>

      <ProductHeader
        name={'Meat and Fish'}
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

export default Meat;

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