import React, { useState } from 'react'
import { Button, Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { global } from '../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, didTask } from '../store/taskAction';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    console.log(tasks)
    const [text, setText] = useState('');
    const changeHandler = val => {
      setText(val);
    };
    const submitTask = () => {
        dispatch(addTask(text));
        setText('');
    };

    const removeTask = id => dispatch(deleteTask(id))
    const finishedTask = id => dispatch(didTask(id))
    
  const goToTask = () => {
        navigation.push("Task")
    }

    

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {/* <SafeAreaView > */}
    <View style={global.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new Task"
        onChangeText={changeHandler}
        value={text}
        />
        <Button title='add task' color="blue"  
        onPress={submitTask}/>
        <FlatList
        data={tasks}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task", item)}>
            <Text style={item.done ? {color:"green", fontWeight: 'bold'} : null } onPress={() => finishedTask(item.id)}>{item.task}</Text>
            <Button title="delete" onPress={() => removeTask(item.id)}/>
            </TouchableOpacity>
  )}
  />
    </View>
    {/* </SafeAreaView> */}
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  input: {
      margin: 10,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
  },
});

export default Home