import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
  } from 'react-native'
  import React from 'react'
  import {useNavigation} from '@react-navigation/native'
  import { height, width } from './Diemensions'
  import PlusButton from './PlusButton'
  import ProductHeader from './ProductHeader'
  
  const OilandGhee = (props) => {

    const navigation = useNavigation();
  
    const oilData = [
      {
        name: 'Afia Cooking Oil',
        imageSource: require('./images/OilProducts/afia.png'),
        price: '$ 5.99'
      },
      {
        name: 'Canolive Oil',
        imageSource: require('./images/OilProducts/canolive.png'),
        price: '$ 4.99'
      },
      {
        name: 'Patanjali Cow Ghee',
        imageSource: require('./images/OilProducts/cow.png'),
        price: '$ 8.99'
      },
      {
        name: 'Eva Cooking Oil',
        imageSource: require('./images/OilProducts/eva.png'),
        price: '$ 6.50'
      },
      {
        name: 'Habib Ghee',
        imageSource: require('./images/OilProducts/habib.png'),
        price: '$ 3.50'
      },
      {
        name: 'Man Psand Ghee',
        imageSource: require('./images/OilProducts/manpsand.png'),
        price: '$ 5.59'
      },
      
    ]
  
  
    return (
  
      <View style={styles.mainView}>
  
        <ProductHeader
          name={'Cooking Oil & Ghee'}
          navOnPress={() => navigation.goBack() }
        />
  
        <FlatList
  
          showsVerticalScrollIndicator={false}
  
          contentContainerStyle={styles.flatList}
  
          numColumns={2}
  
          data={oilData}
  
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
  
  export default OilandGhee;
  
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