import React, { useState } from 'react'
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { global } from '../styles/global'

const Home = ({navigation}) => {
    const [tasks, setTasks] = useState([
        {"task":"HTML I","done":true, "id": "1"},
        {"task":"CSS","done":true, "id": "2"},
        {"task":"Responsive design","done":true, "id": "3"},
        {"task":"Git","done":true, "id": "4"},
        ])

    const goToTask = () => {
        navigation.push("Task")
    }

  return (
    <View style={global.container}>
        <FlatList
        data={tasks}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate("Task", item)}>
            <Text>{item.task}</Text>
            </TouchableOpacity>
  )}
  />
    </View>
  )
}



export default Home