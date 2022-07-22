import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import colors from '../../utils/colors'

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState("")
    const onChangeTextHandler = (text) => {
        setText(text)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTodo</Text>
      <TextInput style={styles.textInput}  placeholder='Enter a Task' onChangeText={(val)=>onChangeTextHandler(val)} />
      <Button color={colors.primary} style={styles.buttonContainer} title='Add Todo' onPress={()=>onAdd(text)} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    buttonContainer: {
        marginVertical: 20,
        backgroundColor: colors.primary
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
     
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,

    }


})

export default AddTodo