import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import colors from "../../utils/colors";

const TodoItem = ({ item, onDelete, onEdit,onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(true);
  const [text, setText] = useState(item.title);
  const onChangeTextHandler = (text) => {
    setText(text);
    onEdit(id, text);
  };
  const ref_input = useRef(null);
  return (
    <View style={[styles.card, styles.shadowProp]}>
     
      {item.completed ? (
        <Text style={styles.text}> {item.title}</Text>
      ):
          <TextInput
            style={styles.textInput}
            placeholder={text}
            value={text}
            onChangeText={(val) => onChangeTextHandler(val)}
            ref={ref_input}

          />}
         
        
     
      <View style={styles.actions}>
    {isCompleted? <TouchableOpacity
            onPress={() => {
              onComplete(item.id)
            setIsCompleted(!isCompleted)
            }}
           
          >
            <Image
              source={require("../../assets/check.png")}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>:
           <TouchableOpacity
           onPress={() => {
            onComplete(item.id)
          setIsCompleted(!isCompleted)
          }}
          
         >
           <Image
             source={require("../../assets/close.png")}
             style={styles.deleteIcon}
           />
         </TouchableOpacity>
          }
        <TouchableOpacity onPress={() =>{ setIsEdit(false)
        if(ref_input.current){
          ref_input.current.focus();
        }
        
        }}
       >
          <Image
            source={require("../../assets/edit.png")}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Image
            source={require("../../assets/delete.png")}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>

      {/* <Button onPress={()=>onDelete(item.id)} title="delete"/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  actions: {
   
   flexDirection: "row",
    
    alignItems: "center",
  },
  text: {
    textDecorationLine: "line-through",
    textDecorationColor: "red",
    color :colors.primary
  }
});

export default TodoItem;
