import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import colors from "../../utils/colors";
const TodoList = () => {
  const [list, setList] = useState([]);
  const onDelete = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };
  const onAdd = (title) => {
    if (title.length > 3) {
      setList((list) => [
        { title, completed: false, id: list.length + 1 },
        ...list,
      ]);
    } else {
      Alert.alert("oops", "Please enter a valid task", [
        {
          text: "ok",
          onPress: () => {
            console.log("alert closed");
          },
        },
      ]);
    }
  };
  const onEdit = (id, title) => {
    setList((list) =>
      list.map((item) => (item.id === id ? { ...item, title } : item))
    );
  };
  const onComplete = (id) => {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <AddTodo onAdd={onAdd} />

      <View style={styles.flex}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={({ item }) => (
            <TodoItem
              onEdit={onEdit}
              onComplete={onComplete}
              onDelete={onDelete}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    height: "90%",
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default TodoList;
