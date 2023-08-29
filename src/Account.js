import React, { useState, useEffect } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { width } from './Diemensions'
import Icon from 'react-native-vector-icons/FontAwesome5';

import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { useNavigation, StackActions } from '@react-navigation/native';


const Account = () => {

  const navigation = useNavigation();

  useEffect(() => {
    userData();
  }, [userData]);

  const [data, setData] = useState(null);

  const userData = () => {

    auth().onAuthStateChanged(async user => {
      try {
        
        let result = await firestore().collection('users').doc(`${user.uid}`).get();

        setData(result._data)
      } catch (error) {
        console.log(error)
      }
    })

  }

  const handleSignout = async () => {
    await auth().signOut();
    navigation.dispatch(StackActions.replace('Welcome'));
  }

  return (
    <View>

      <StatusBar backgroundColor={'#9DB2BF'} />

      {/* --------------- Logo View Start --------------- */}

      <View style={styles.logoView}>

        <View style={styles.logoStyle}>

          <Image source={require('./images/accountLogo.jpg')}
            resizeMode='cover'
            style={styles.logo}
          />

        </View>

        <View>

          <View style={styles.userEditView}>

            <Text style={styles.accounName}>
              {/* Irfan Abbas */}
              {
                data ? data.name : 'Loading'
              }
            </Text>

            <TouchableOpacity>
              <Icon name='user-edit' size={width * 0.04} color='#9DB2BF' />
            </TouchableOpacity>

          </View>

          <Text style={styles.accounmail}>
            {/* irfanabbas00429@gmail.com */}
            {
              data ? data.email : 'Loading'
            }
          </Text>

        </View>

      </View>

      {/* --------------- Logo View End --------------- */}

      {/* --------------- Order View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='shopping-bag' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Orders
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Order View End --------------- */}

      {/* --------------- My Detials View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='address-card' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            My Detials
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- My Details View End --------------- */}

      {/* --------------- Delivery View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='map-marker-alt' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Delivery Address
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Delivery Address View End --------------- */}

      {/* --------------- Payment Methods View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='money-check' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Payment Methods
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Payment Methods View End --------------- */}


      {/* --------------- Promo Code View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='gift' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Promo Code
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Promo Code View End --------------- */}



      {/* --------------- Notifications View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='bell' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Notifications
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Notifications View End --------------- */}


      {/* --------------- Help View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='question' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            Help
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- Help View End --------------- */}

      {/* --------------- About View Start --------------- */}

      <View style={styles.CommonView}>

        <View style={styles.CommonInnerView}>

          <View style={styles.iconStyle}>
            <Icon name='info' size={width * 0.05} color='#9DB2BF' />
          </View>

          <Text style={styles.commonText}>
            About
          </Text>

        </View>

        <TouchableOpacity>
          <Icon name='angle-right' size={width * 0.1} color='#9DB2BF' />
        </TouchableOpacity>

      </View>

      {/* --------------- About View End --------------- */}

      <TouchableOpacity
        style={styles.signOut}
        onPress={handleSignout}
      >

        <Icon name='sign-out-alt' size={width * 0.13} color='#9DB2BF' />
        <Text style={styles.btnText}>
          Log Out
        </Text>

      </TouchableOpacity>


    </View>
  )
}

export default Account

const styles = StyleSheet.create({

  // --------- Logo View Start ---------------

  logoView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03,
    padding: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#526D82'
  },
  logo: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.75,
  },
  logoStyle: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#9DB2BF'
  },
  userEditView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accounName: {
    fontSize: width * 0.06,
    fontFamily: 'abz',
    color: '#000'
  },
  accounmail: {
    fontSize: width * 0.04,
    fontFamily: 'abz',
    color: '#000',
    marginVertical: width * 0.01,
  },

  // --------- Logo View End ---------------


  // --------- Common Styles ---------------

  CommonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#526D82',
  },
  CommonInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.06

  },
  commonText: {
    fontSize: width * 0.05,
    fontFamily: 'abz',
    color: '#526D82',
  },
  iconStyle: {
    backgroundColor: '#526D82',
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Sign Out Button Design....

  signOut: {
    backgroundColor: '#526D82',
    margin: width * 0.07,
    padding: width * 0.02,
    borderRadius: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: width * 0.06,
    marginLeft: width * 0.2,
    fontFamily: 'titli',
    // color: '#CBB279'
    color: '#9DB2BF'
  }



});