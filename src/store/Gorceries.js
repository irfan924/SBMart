import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import { height, width } from '../Diemensions'

const Gorceries = () => {
    return (
        <View>
            <View style={styles.textView}>
                <Text style={styles.mainText}>
                    Gorceries
                </Text>
                <TouchableOpacity>
                    <Text style={styles.btnText}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView 
                horizontal={true}
            >

                {/* Product 1 */}
                <View
                    style={{
                        backgroundColor: '#E2F6CA',
                        ...styles.mainView
                    }}
                >
                    <Image source={require('../images/pulses.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <Text style={styles.text}>
                        Pulses
                    </Text>
                </View>

                {/* Product 2 */}
                <View
                    style={{
                        backgroundColor: '#9BE8D8',
                        ...styles.mainView
                    }}
                >
                    <Image source={require('../images/rice.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <Text style={styles.text}>
                        Rice
                    </Text>
                </View>

                {/* Product 3 */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#E2F6CA',
                        ...styles.mainView
                    }}
                >
                    <Image source={require('../images/refinedSugar.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <Text style={styles.text}>
                        Refined Sugar
                    </Text>
                </TouchableOpacity>

                {/* Product 4 */}
                <View
                    style={{
                        backgroundColor: '#9BE8D8',
                        ...styles.mainView
                    }}
                >
                    <Image source={require('../images/chiliPowder.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <Text style={styles.text}>
                        Red Chili
                    </Text>
                </View>

                {/* Product 5 */}
                <View
                    style={{
                        backgroundColor: '#E2F6CA',
                        ...styles.mainView
                    }}
                >
                    <Image source={require('../images/cookingOil.png')}
                        resizeMode='contain'
                        style={styles.img}
                    />
                    <Text style={styles.text}>
                        Cooking Oil
                    </Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default Gorceries

const styles = StyleSheet.create({
    textView: {
        marginTop: height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainText: {
        fontSize: height * 0.03,
        fontFamily: 'titli',
        color: '#000'
    },
    text: {
        fontSize: height * 0.025,
        fontFamily: 'abz',
        color: '#000'
    },
    btnText: {
        fontSize: height * 0.02,
        fontFamily: 'abz',
        color: '#53B175'
    },
    mainView: {
        width: width * 0.7,
        height: width * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: height * 0.02,
        padding: width * 0.02,
        borderRadius: width * 0.05,
        marginHorizontal: width*0.01
    },
    img: {
        width: width * 0.3,
        height: width * 0.3,
    }
});