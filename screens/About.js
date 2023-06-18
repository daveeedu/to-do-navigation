import React from 'react'
import { global } from '../styles/global'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const About = ({navigation}) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const tasksDone = tasks.filter(item => item.done === true)
  return (
    <View style={global.container}>
        <Text>Task that has been done</Text>
        <FlatList
        data={tasksDone}
        renderItem={({item}) => (
            <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task", item)}>
            <Text style={item.done ? {color:"green", fontWeight: 'bold'} : null } onPress={() => finishedTask(item.id)}>{item.task}</Text>
            </TouchableOpacity>
  )}
  />
    </View>
  )
}

export default About