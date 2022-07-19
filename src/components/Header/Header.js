import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Todo List</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        marginTop: 0,
        height: 50,
        backgroundColor: "black",
        
       
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        paddingTop: 15,
        fontWeight: "bold",
    }   
})

export default Header