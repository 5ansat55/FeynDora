import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign,MaterialIcons} from '@expo/vector-icons';
import PublicStyles from "../constants/PublicStyles";
import Colors from "../constants/Colors";

const Item = ({ title,onNext }) => {
    
    return(
  <View style={styles.item}>
<AntDesign name="staro" size={24} color="black"/>
    <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1} >{title}</Text>
    <View>
    <MaterialIcons name="post-add" size={24} color={Colors.secondColor} onPress={onNext} />
    </View>
  </View>
)};
const styles = StyleSheet.create({
  item: {
    flexDirection:"row",
    flex: 1,
    width: "100%",
    backgroundColor: "whitesmoke",
    padding: 20,
    marginVertical: 10,
    alignItems:"center",
    justifyContent:"center",
    ...PublicStyles.shadow1
  },
  title: {
    fontSize: 14,
    minWidth:"50%",
    marginLeft:5,
  },
});

export default Item;
