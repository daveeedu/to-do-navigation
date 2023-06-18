import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AboutStack, HomeStack } from './MyStack'

const MyTab = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Done" component={AboutStack} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default MyTab
