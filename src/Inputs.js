import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { width } from './Diemensions'

const Inputs = () => {
  return (
    <View style={styles.container}> 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width*0.95,
          backgroundColor: '#DDE6ED',
          paddingHorizontal: 15,
          borderRadius: 10
        }}
      >
      <TextInput
        placeholder='Search Store'
        placeholderTextColor={'#000'}
        style={styles.input}
      />
        
      <TouchableOpacity>
        <Image source={require('./images/searchBtn.png')}
          resizeMode='contain'
          style={styles.img}
        />
      </TouchableOpacity>
      </View>


    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: 20,
    height: 20,
    tintColor: '#000'
  },
  input: {
    fontSize: 16,
    fontFamily: 'abz',
    width: width*0.7
  }
})