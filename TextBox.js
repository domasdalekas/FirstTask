import React from "react";
import { View, StyleSheet, Text,TextInput } from "react-native";

const TextBox = ({ color,title }) => {
  return (
   
    <View style={[{ backgroundColor: color }]}>
    <TextInput 
        placeholder = {title}
        placeholderTextColor = {color}
        style={textBoxstyles.textInput}
     />
    </View>
  );
};

export default TextBox;

const textBoxstyles = StyleSheet.create({
  customBox: {
    borderColor: "#000",
    borderWidth: 3,
    height: 45,
    width: 150,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    marginTop: 15,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  textInput:
  {
    width: '100%',
    height: '100%',
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#FF9800',
    backgroundColor: 'gray',
    fontWeight: "bold"
  }
});