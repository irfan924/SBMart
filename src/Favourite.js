import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { height, width } from './Diemensions'
import Icon from 'react-native-vector-icons/FontAwesome5'
import PrimaryButton from './PrimaryButton'


const Favourite = () => {


  const data = [
    {
      name: 'Natural Red Apple',
      price: '4.99$',
      quantity: '1kg, Price',
      image: require('./images/apple.png'),
      btnImage: require('./images/right.png')
    },
    {
      name: 'Organic Bananas',
      price: '1.99$',
      quantity: '1 Dozen, Price',
      image: require('./images/banana.png'),
      btnImage: require('./images/right.png')
    },

  ]

  return (

    <View style={styles.mainView}>
      <StatusBar backgroundColor={'#9DB2BF'} />

      <View>
        <Text style={styles.headingName}>
          Favourite
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) =>
          <View style={{
            ...styles.contentView,
            backgroundColor: '#DDE6ED'

          }}>

            <View style={styles.imgView}>

              <Image source={item.image}
                style={styles.img}
                resizeMode='contain'
              />

              <View>
                <Text style={styles.nameText}>
                  {item.name}
                </Text>
                <Text>
                  {item.quantity}
                </Text>
              </View>

            </View>

            <View style={styles.priceView}>
              <Text style={styles.priceText}>
                {item.price}
              </Text>

              <TouchableOpacity>

                <Icon name='angle-right' size={width * 0.1} color='black' />

              </TouchableOpacity>
            </View>


          </View>
        }

      />

      <View style={{ paddingVertical: height * 0.01 }}>

        <PrimaryButton buttonName={'Add to Cart.'} />

      </View>

    </View>

  )
}

export default Favourite

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: width * 1,
    height: height * 1,
    padding: height * 0.01,
    paddingBottom: height * 0.18
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.1,
    padding: width * 0.02,
    borderRadius: height * 0.01,
    marginVertical: height * 0.01,
  },
  img: {
    width: width * 0.2,
    height: height * 0.1,
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: height * 0.03,
  },
  nameText: {
    fontFamily: 'abz',
    color: '#000',
    textAlign: 'center'
  },
  headingName: {
    fontSize: height * 0.03,
    fontFamily: 'titli',
    color: '#000',
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    textAlign: 'center',
    borderBottomColor: 'lightgrey',
    marginBottom: height * 0.01
  },
  priceText: {
    fontFamily: 'abz',
    color: '#000',
    textAlign: 'center',
    fontSize: height * 0.025,
  },
  priceView: {
    flexDirection: 'row',
    gap: height * 0.01,
    alignItems: 'center'
  },

})