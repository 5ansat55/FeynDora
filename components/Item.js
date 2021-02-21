import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import PublicStyles from "../constants/PublicStyles";
import Colors from "../constants/Colors";

const Item = (props) => {
  return (
    <View style={{ ...styles.item, ...props.style }}>
      <Ionicons name={props.icon} size={24} color={Colors.secondColor} />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {props.title}
      </Text>
      <View style={styles.viewIcon}>
        <TouchableOpacity style={styles.button} onPress={props.onNext}>
          <MaterialIcons name="post-add" size={24} color={Colors.secondColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="edit" size={24} color={Colors.yellow} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <AntDesign name="delete" size={24} color={Colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    backgroundColor: "whitesmoke",
    padding: 10,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "flex-start",
    ...PublicStyles.shadow2,
  },
  title: {
    fontSize: 14,
    minWidth: "50%",
    marginLeft: 5,
    maxWidth: 180,
  },
  viewIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    borderWidth: 2,
    borderColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 15,
    margin: 2,
    ...PublicStyles.shadow1,
  },
});

export default Item;
