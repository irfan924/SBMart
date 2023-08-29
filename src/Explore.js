import React from 'react'
import { height, width } from './Diemensions'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar
} from 'react-native'
import Inputs from './Inputs'
import Beverages from './Beverages'
import Vegetables from './Vegetables'
import Dairy from './Dairy'
import Backery from './Backery'
import Meat from './Meat'
import OilandGhee from './OilandGhee'

const Explore = (props) => {


  const exploreData = [
    {
      id: 1,
      name: 'Beverages',
      imageSource: require('./images/beverages.png'),
      onPress: () => {
        props.navigation.navigate(Beverages)
      }
    },
    {
      id: 2,
      name: 'Cooking Oil & Ghee',
      imageSource: require('./images/cookingoilandghee.png'),
      onPress: () => {
        props.navigation.navigate(OilandGhee)
      }
    },
    {
      id: 3,
      name: 'Meat and Fish',
      imageSource: require('./images/meatandfish.png'),
      onPress: () => {
        props.navigation.navigate(Meat);
      }
    },
    {
      id: 4,
      name: 'Bakery & Snacks',
      imageSource: require('./images/bakery.png'),
      onPress: () => {
        props.navigation.navigate(Backery);
      }
    },
    {
      id: 5,
      name: 'Dairy & Eggs',
      imageSource: require('./images/dairyandeggs.png'),
      onPress: () => {
        props.navigation.navigate(Dairy);
      }
    },
    {
      id: 6,
      name: 'Fresh Fruits & Vegetables',
      imageSource: require('./images/fruits.png'),
      onPress: () => {
        props.navigation.navigate(Vegetables);
      }
    },
  ]


  return (

    <View style={styles.mainView}>

      <StatusBar backgroundColor={'#9DB2BF'} />

      {/* Top View Text and Input */}

      <View style={styles.topView}>

        <Text style={styles.text}>
          Find Products
        </Text>

        {/* Input Component */}

        <Inputs />

      </View>

      {/* Product View */}

      <FlatList

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.flatList}

        numColumns={2}

        data={exploreData}

        renderItem={({ item }) =>

          <View style={styles.contentView}>

            <Image source={item.imageSource}
              style={styles.img}
              resizeMode='contain'
            />

            <TouchableOpacity
              onPress={item.onPress}
            >

              <Text style={styles.nameText}>
                {item.name}
              </Text>

            </TouchableOpacity>

          </View>

        }

      />


    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: width * 1,
    height: height * 1,
    padding: height * 0.01,
    // paddingBottom: height*0.15
  },
  text: {
    fontSize: height * 0.03,
    fontFamily: 'titli',
    color: '#000',
    marginVertical: width * 0.04,
  },
  topView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.02,
  },
  img: {
    width: width * 0.3,
    height: height * 0.15,
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.4,
    height: height * 0.22,
    borderRadius: height * 0.01,
    borderWidth: 1,
    borderColor: '#526D82',
    margin: width*0.05,
  },
  nameText: {
    fontFamily: 'abz',
    color: '#000',
    textAlign: 'center'
  },
  flatList: {
    alignItems: 'center',
    width: width*0.95,
    marginTop: height * 0.01,
    // gap: width * 0.1,
    paddingBottom: height*0.17
  }

});