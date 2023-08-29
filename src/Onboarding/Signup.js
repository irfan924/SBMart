import React, { useState } from 'react'
import {
    Alert,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { height, width } from '../Diemensions'
import LoginInput from '../LoginInput'
import PrimaryButton from '../PrimaryButton'
import SocialLinks from '../SocialLinks'
import Signin from './Signin'

import firestore from '@react-native-firebase/firestore'
import { useNavigation} from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import Tabs from '../Tabs'
import LeftButton from '../LeftButton'

const Signup = (props) => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createPass, setCreatePass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleUser = async () => {

        if (name != '' && email != '' && createPass != '' && confirmPass != '') {
            if (createPass === confirmPass) {

                const newUser = await auth().createUserWithEmailAndPassword(email,confirmPass);

                

                firestore().collection('users').doc(newUser.user.uid).set({
                    name: name,
                    email: email,
                    createPass: createPass,
                    confirmPass: confirmPass,
                });

                navigation.navigate(Tabs);

                initialState();

            }
            else {
                Alert.alert('Please Enter Same Password');
            }
        }
        else {
            Alert.alert('Please Enter All Details.')
        }

    }


    const initialState = () => {
        setName('');
        setEmail('');
        setCreatePass('');
        setConfirmPass('');
    }


    return (
        <View style={styles.mainView}>

            <StatusBar backgroundColor={'#9DB2BF'} />

            <LeftButton onPress={()=> navigation.goBack()} />

            <View style={styles.bgImg}>

                <Image
                    source={require('../images/onlineshopping.png')}
                    resizeMode='contain'
                    style={styles.img}
                />

            </View>
            <View>
                <Text style={styles.text1}>
                    Hello!
                </Text>
                <Text style={styles.text2}>
                    Welcome to Our Mart
                </Text>
            </View>

            <View>

                <LoginInput
                    name={'Your Full Name'}
                    onChangeText={(val) => setName(val)}
                />
                <LoginInput
                    name={'Your Email'}
                    onChangeText={(val) => setEmail(val)}
                />
                <LoginInput
                    name={'Create Password'}
                    security={true}
                    onChangeText={(val) => setCreatePass(val)}
                />
                <LoginInput
                    name={'Confirm Password'}
                    security={true}
                    onChangeText={(val) => setConfirmPass(val)}
                />

                <PrimaryButton buttonName={'Sign Up'} onPress={handleUser} />

                <SocialLinks name={'------ Or Sign Up With ------'} />

                <View style={styles.btnView}>
                    <Text style={styles.text3}>
                        Have an Account ?
                    </Text>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={()=> navigation.navigate(Signin)}
                    >

                        <Text style={styles.text4}>
                            Sign In
                        </Text>

                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgImg: {
        width: width * 1,
        height: height * 0.25,
        backgroundColor: '#9DB2BF',
        borderBottomLeftRadius: width * 0.5,
        borderBottomRightRadius: width * 0.5
    },
    img: {
        width: width * 1,
        height: height * 0.25
    },
    text1: {
        fontSize: width * 0.1,
        color: '#526D82',
        fontFamily: 'abz',
        marginLeft: width * 0.02
    },
    text2: {
        fontSize: width * 0.05,
        color: '#526D82',
        fontFamily: 'abz',
        textAlign: 'center',
        marginBottom: width * 0.03
    },
    text3: {
        fontSize: width * 0.05,
        color: '#526D82',
        fontFamily: 'abz',
    },
    text4: {
        fontSize: width * 0.05,
        color: '#fff',
        fontFamily: 'abz',
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#526D82',
        padding: width * 0.01,
        borderRadius: width * 0.01
    }
});