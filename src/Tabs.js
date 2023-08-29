import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import Store from './Store';
import Explore from './Explore';
import Cart from './Cart';
import Favourite from './Favourite';
import Account from './Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#526D82',
                    height: 80,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                },
                
            }}
        >
        

            {/* Store Screen */}

            <Tab.Screen name="Store" component={Store}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (

                        <View style={styles.view}>
                            <Image source={require('./images/store.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#CBB279' : '#D2E9E9'
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: focused ? '#CBB279' : '#D2E9E9',
                                fontFamily: 'titliRegular'
                            }}>Shop</Text>
                        </View>
                    )

                }}

            />

            {/* Explore Screen */}

            <Tab.Screen name="Explore" component={Explore}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <Image source={require('./images/search.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#CBB279' : '#D2E9E9'
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: focused ? '#CBB279' : '#D2E9E9',
                                fontFamily: 'titliRegular'
                            }}>Explore</Text>
                        </View>
                    )
                }}
            />

            {/* Cart Screen */}

            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <Image source={require('./images/cart.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#CBB279' : '#D2E9E9'
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: focused ? '#CBB279' : '#D2E9E9',
                                fontFamily: 'titliRegular'
                            }}>Cart</Text>
                        </View>
                    )
                }}
            />

            {/* Favourite Screen */}

            <Tab.Screen name="Favourite" component={Favourite}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <Image source={require('./images/love.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#CBB279' : '#D2E9E9'
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: focused ? '#CBB279' : '#D2E9E9',
                                fontFamily: 'titliRegular'
                            }}>Favourite</Text>
                        </View>
                    )
                }}
            />

            {/* Account Screen */}

            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <Image source={require('./images/user.png')}
                                style={{
                                    resizeMode: 'contain',
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#CBB279' : '#D2E9E9'
                                }} />
                            <Text style={{
                                fontSize: 16,
                                color: focused ? '#CBB279' : '#D2E9E9',
                                fontFamily: 'titliRegular'
                            }}>User</Text>
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
        

    );
}
export default Tabs

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 35,
        height: 35,
    }
})