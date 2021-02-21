import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default CustomText = (props) => {
  return (
    <Text style={styles.title} {...props}>
      {props.title} <Text style={styles.subTitle}>{props.subTitle}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
    title: {
    fontFamily: "RobotoBold",
    fontSize: 21,
    color:Colors.thirdColor
  },
  subTitle:{
    fontFamily: "RobotoRegular",
    fontSize: 14,
    color:Colors.secondColor
  }
});
