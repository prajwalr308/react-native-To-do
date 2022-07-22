import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View ,TouchableWithoutFeedback,Keyboard} from "react-native";
import AddTodo from "./src/components/AddTodo/AddTodo";
import Header from "./src/components/Header/Header";
import TodoList from "./src/components/TodoList/TodoList";
import colors from "./src/utils/colors";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Header />
      <TodoList />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    width: 200,
  },
});
