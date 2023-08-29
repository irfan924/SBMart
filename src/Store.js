import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar
} from 'react-native'
import Inputs from './Inputs';
import OffersView from './store/OffersView';
import ExclusiveOffers from './store/ExclusiveOffers';
import BestSelling from './store/BestSelling';
import Gorceries from './store/Gorceries';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Store = () => {


  return (
    
    <ScrollView style={styles.mainView}>
      <StatusBar backgroundColor={'#9DB2BF'} />

      {/* Inputs */}
      <Inputs/>

      {/* Offers View Section */}

      <OffersView/>

      {/* Exclusive Offers */}

      <ExclusiveOffers/>

      {/* Best Selling */}

      <BestSelling/>

      {/* Groceries */}

      <Gorceries/>

    </ScrollView>

  )
}

export default Store

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    width: width*1,
    height: height*1,
    padding: height*0.01,
  },
  
})