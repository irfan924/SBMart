import {
    StyleSheet,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import React from 'react'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const OffersView = () => {
    return (
        <ScrollView
            horizontal={true}
        >
            <Image source={require('../images/banner1.png')} style={styles.img} resizeMode='cover' />
            <Image source={require('../images/banner2.png')} style={styles.img} resizeMode='cover' />
            <Image source={require('../images/banner3.png')} style={styles.img} resizeMode='cover' />
            <Image source={require('../images/banner4.png')} style={styles.img} resizeMode='cover' />
            <Image source={require('../images/banner5.png')} style={styles.img} resizeMode='cover' />
            <Image source={require('../images/banner6.png')} style={styles.img} resizeMode='cover' />
        </ScrollView>
    )
}

export default OffersView

const styles = StyleSheet.create({
    img: {
        width: width * 0.95,
        height: height * 0.19,
        marginTop: height * 0.02,
        marginRight: height * 0.0025,
        borderRadius: height * 0.015,

    }
});