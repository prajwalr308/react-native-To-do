import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AddTodo from './src/components/AddTodo/AddTodo';
import Header from './src/components/Header/Header';
import TodoList from './src/components/TodoList/TodoList';

export default function App() {

  return (
    <View style={styles.container} >
      <Header />
     
      <TodoList />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
   
 
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    width: 200,
  },
});
