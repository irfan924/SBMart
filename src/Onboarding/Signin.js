import React, { useState } from 'react'
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    Alert,
    View,
    TouchableOpacity
} from 'react-native'
import { height, width } from '../Diemensions'
import LoginInput from '../LoginInput'
import PrimaryButton from '../PrimaryButton'
import SocialLinks from '../SocialLinks'
import Tabs from '../Tabs'

import auth from '@react-native-firebase/auth'

import { useNavigation } from '@react-navigation/native'
import LeftButton from '../LeftButton'



const Signin = (props) => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleUser = async () => {

        try {

            await auth().signInWithEmailAndPassword(email, pass);

            navigation.navigate(Tabs);

        } catch (error) {
            Alert.alert('Wrong! Email or Password');
        }

    }

    return (
        <View style={styles.mainView}>

            <StatusBar backgroundColor={'#9DB2BF'} />

            <LeftButton onPress={()=> navigation.goBack()} />

            <View>

                <Image
                    source={require('../images/welcome.png')}
                    style={styles.img}
                    resizeMode='contain'
                />

            </View>

            <View>
                <Text style={styles.welcome}>
                    Welcome Back!
                </Text>
            </View>

            <View>

                <LoginInput
                    name={'Email'}
                    onChangeText={(val) => setEmail(val)}
                />

                <LoginInput
                    name={'Password'}
                    security={true}
                    onChangeText={(val) => setPass(val)}
                />

                <TouchableOpacity>
                    <Text style={styles.forget}>
                        Forget Password!

                    </Text>
                </TouchableOpacity>

                <PrimaryButton buttonName={'Log In'} onPress={handleUser} />

            </View>

            <View>

                <SocialLinks name={'------ Or Sigin With ------'} />

            </View>

        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img: {
        width: width * 1,
        height: height * 0.3,
        backgroundColor: '#9DB2BF',
        borderBottomLeftRadius: width * 0.5,
        borderBottomRightRadius: width * 0.5,
    },
    welcome: {
        fontSize: width * 0.1,
        marginVertical: width * 0.08,
        textAlign: 'center',
        fontFamily: 'abz',
        color: '#526D82'
    },
    forget: {
        fontSize: width * 0.05,
        marginVertical: width * 0.03,
        textAlign: 'right',
        marginRight: width * 0.06,
        fontFamily: 'abz',
        color: '#526D82'
    },


});