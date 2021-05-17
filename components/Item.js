import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useDispatch} from "react-redux";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import PublicStyles from "../constants/PublicStyles";
import Colors from "../constants/Colors";

const Item = (props) => {
  const [unVisibleButton, setUnVisibleButton] = useState(props.unVisibleButton);

  return (
    <TouchableOpacity onPress={props.onNext}>
      <View style={{ ...styles.item, ...props.style }}>
        <Ionicons name={props.icon} size={24} color={Colors.secondColor} />
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {props.data.title}
        </Text>
        <View style={styles.viewIcon}>
          {!unVisibleButton && (
            <TouchableOpacity style={styles.button} onPress={props.onNext}>
              <MaterialIcons
                name="post-add"
                size={24}
                color={Colors.secondColor}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button}>
            <AntDesign name="edit" size={24} color={Colors.yellow} onPress={()=>props.onUptadeTopic(props.data)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>props.onDeleteTopic(props.data.id)}>
            <AntDesign name="delete" size={24} color={Colors.red} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
