import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';

import React from 'react';
import { height, width } from '../Diemensions';

import {useNavigation} from '@react-navigation/native'

import LottieView from 'lottie-react-native';
import PrimaryButton from '../PrimaryButton';
import Signup from './Signup';



const Welcome = (props) => {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate(Signup)
    }

    return (
        <View style={styles.mainView}>

            <StatusBar backgroundColor={'#9DB2BF'} />


            <LottieView
                source={require('../Animations/onboardingAnimation.json')}
                loop={true}
                autoPlay={true}
                style={styles.animate}
            />

            <PrimaryButton
                buttonName={'Get Started'}
                onPress={() => handleNavigation()}
            />


        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({

    mainView: {
        width: width * 1,
        height: height * 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2E9E9'
    },

    animate: {
        width: width * 1,
        height: height * 0.5,
    }

});
