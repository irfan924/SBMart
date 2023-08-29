import { StyleSheet, } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tabs from './src/Tabs'
import Beverages from './src/Beverages'
import Welcome from './src/Onboarding/Welcome'
import Signin from './src/Onboarding/Signin'
import Signup from './src/Onboarding/Signup'
import Splash from './src/Splash'
import LeftButton from './src/LeftButton'
import OilandGhee from './src/OilandGhee'
import Meat from './src/Meat'
import Backery from './src/Backery'
import Dairy from './src/Dairy'
import Vegetables from './src/Vegetables'

const Stack = createStackNavigator();

const App = () => {

  

  return (



    <NavigationContainer>



      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen
          name='Splash'
          component={Splash}
        />

        <Stack.Screen
          name='Welcome'
          component={Welcome}
        />

        <Stack.Screen
          name='Signup'
          component={Signup}
        />

        <Stack.Screen
          name='Signin'
          component={Signin}
        />

        <Stack.Screen
          name='Tabs'
          component={Tabs}
        />

        <Stack.Screen
          name='Beverages'
          component={Beverages}
        />

        <Stack.Screen
          name='LeftButton'
          component={LeftButton}
        />
        
        <Stack.Screen
          name='OilandGhee'
          component={OilandGhee}
        />

        <Stack.Screen
          name='Meat'
          component={Meat}
        />

        <Stack.Screen
          name='Backery'
          component={Backery}
        />

        <Stack.Screen
          name='Dairy'
          component={Dairy}
        />

        <Stack.Screen
          name='Vegetables'
          component={Vegetables}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})