import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import React from 'react'
import { height, width } from './Diemensions'
import IncrementButton from './IncrementButton'
import PrimaryButton from './PrimaryButton'


const Cart = () => {


  const data = [
    {
      name: 'Natural Red Apple',
      price: '4.99$',
      quantity: '1kg, Price',
      image: require('./images/apple.png'),
      crossImg: require('./images/cross.png')
    },
    {
      name: 'Organic Bananas',
      price: '1.99$',
      quantity: '1 Dozen, Price',
      image: require('./images/banana.png'),
      crossImg: require('./images/cross.png')
    },

  ]

  return (

    <View style={styles.mainView}>

      <StatusBar backgroundColor={'#9DB2BF'} />

      <View>
        <Text style={styles.headingName}>
          My Cart
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

              <View style={styles.nameView}>

                <View>

                  <Text style={styles.nameText}>
                    {item.name}
                  </Text>
                  <Text>
                    {item.quantity}
                  </Text>

                </View>

                <IncrementButton />

              </View>

            </View>

            <View style={styles.priceView}>

              <TouchableOpacity>
                <Image source={item.crossImg} style={styles.crossImg} />
              </TouchableOpacity>

              <Text style={styles.priceText}>
                {item.price}
              </Text>

            </View>


          </View>
        }

      />

      <View style={{ paddingVertical: height * 0.01 }}>

        <PrimaryButton buttonName={'Go to Checkout'} />

      </View>

    </View>

  )
}

export default Cart

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
    height: height * 0.2,
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
  nameView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: height * 0.05,
  },
  priceText: {
    fontFamily: 'abz',
    color: '#000',
    textAlign: 'center',
    fontSize: height * 0.025,
  },
  priceView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: height * 0.07,
  },
  crossImg: {
    width: width * 0.05,
    height: width * 0.05,
    tintColor: '#526D82'
  }

})