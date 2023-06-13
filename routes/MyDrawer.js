import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AboutStack, HomeStack } from './MyStack'

const MyDrawer = () => {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Todo App" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>  )
}

export default MyDrawer