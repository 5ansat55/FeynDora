import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import {MaterialIcons,Ionicons } from '@expo/vector-icons';
import PublicStyles from "../constants/PublicStyles";
import Colors from "../constants/Colors";

export default RoundButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Ionicons name={props.icon} size={24} color={Colors.thirdColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    margin:"2%",
    ...PublicStyles.shadow2
  },
});
