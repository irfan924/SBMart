import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { height, width } from './Diemensions'

import {useNavigation, StackActions} from '@react-navigation/native'

import auth from '@react-native-firebase/auth'


const Splash = (props) => {
    
    const navigation = useNavigation();


    useEffect(()=>{
        setTimeout(()=>{
            auth().onAuthStateChanged(user => {
                const roteScreen = user !=null ? 'Tabs' : 'Welcome'
                navigation.dispatch(StackActions.replace(roteScreen))
            })
        }, 1000)
    },[])


  return (
    <View style={styles.mainView}>

        <LottieView
            source={require('./Animations/splashAnimation.json')}
            autoPlay= {true}
            style= {styles.animate}
            resizeMode='contain'
        />

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#DDE6ED',
        justifyContent: 'center',
        alignItems: 'center'
    },
    animate: {
        width: width * 1,
        height: height * 1,
    }
})