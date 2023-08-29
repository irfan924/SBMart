import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { height, width } from './Diemensions';
import IncrementButton from './IncrementButton';

const ProductDetail = () => {

    return (

        <View style={{backgroundColor: '#fff', width: width*1, height: height*1}}>
            
            <View style={styles.imgView}>
                <Image source={require('./images/apple.png')}
                    resizeMode='contain'
                    style={{
                        width: width * 0.7,
                        height: width * 0.7,
                    }}
                />
            </View>

            <View style={styles.secondView}>

                <View>
                    <Text style={styles.mainText}>
                        Natural Red Apples
                    </Text>
                    <Text style={styles.subText}>
                        1kg, Price
                    </Text>
                </View>

                <TouchableOpacity>
                    <Image source={require('./images/love.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                </TouchableOpacity>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: width * 0.03,
                paddingVertical: height * 0.03,
                borderBottomWidth: 1,
                borderBottomColor: 'silver'
            }}>
                
                <IncrementButton/>

                <View>
                    <Text style={styles.mainText}>
                        4.4$
                    </Text>
                </View>
            </View>
            <View style={{
                padding: width * 0.03,
                borderBottomWidth: 1,
                borderBottomColor: 'silver'
            }}>
                <Text style={styles.mainText}>
                    Product Details
                </Text>
                <Text style={styles.subText}>
                    Apples are among the world's most popular fruits. They grow on the apple tree (Malus domestica), originally from Central Asia. Apples are high in fiber, vitamin C, and various antioxidants.
                </Text>
            </View>

            <View style={{
                paddingHorizontal: width * 0.02,
                paddingVertical: width * 0.03,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'silver'
            }}>
                <Text style={styles.mainText}>
                    Nutritions
                </Text>
                <Text style={{
                    backgroundColor: '#F2F3F2',
                    padding: width * 0.01,
                    borderRadius: width * 0.005,
                    color: '#000'
                }}>
                    100gr
                </Text>
            </View>

            <View style={{
                paddingHorizontal: width * 0.02,
                paddingVertical: width * 0.03,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={styles.mainText}>
                    Review
                </Text>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <TouchableOpacity>
                        <Image source={require('./images/star.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./images/star.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./images/star.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./images/star.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./images/star.png')} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    imgView: {
        width: width * 1,
        height: height * 0.3,
        backgroundColor: '#F2F3F2',
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.03,
        marginTop: height * 0.03,
    },
    img: {
        width: width * 0.1,
        height: width * 0.1,
    },
    mainText: {
        fontSize: height * 0.03,
        color: '#000',
        fontFamily: 'titliRegular'
    },
    subText: {
        fontFamily: 'abz',
        // color: '#000'
        marginTop: width * 0.02,
    },
});