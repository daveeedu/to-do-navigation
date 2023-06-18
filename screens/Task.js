import React from 'react'
import { Button, Text, View } from 'react-native'
import { global } from '../styles/global'

const Task = ({ navigation, route }) => {
    const goToHome = () => {
        navigation.goBack()
    }
  return (
    <View style={global.container} >
        <Text>{route.params.task}</Text>
        <Button title="Go back" onPress={goToHome} />
    </View>
  )
}

export default Task