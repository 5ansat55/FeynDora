import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import CustomText from "../components/CustomText";
import Colors from "../constants/Colors";
import PublicStyles from "../constants/PublicStyles";
import Item from "../components/Item";
import Input from "../components/Input";

const SecondScreen = (props) => {
  const inputChangeHandler = (id, value, valid) => {
    console.log(value);
  };
  return (
      <View style={styles.container}>
      <CustomText style={styles.title} title="Topic 1" subTitle="add sub topics."/>
      <View style={styles.inContainer}>
      <Input
        id="subTopic"
        label="Sub-Topic"
        errorText="Please enter a valid sub topic!"
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        required
        placeholder="Write a sub-topic..."
      />
      <RoundButton icon="add-sharp" />
      </View>
      <FlatList
        data={[
          {id:"1",subTitle: 'Devin'},
          {id:"2",subTitle: 'Dan'},
          {id:"3",subTitle: 'Dominic'},
          {id:"4",subTitle: 'Jackson'},
          {id:"5",subTitle: 'James'},
          {id:"6",subTitle: 'Joel'},
          {id:"7",subTitle: 'John'},
          {id:"8",subTitle: 'Jillian'},
          {id:"9",subTitle: 'Jimmy'},
          {id:"10",subTitle: 'Julie'},
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item style={styles.item} icon="checkmark-circle-outline" title={item.subTitle} subTitle="click to learn"></Item>}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item:{
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    borderColor:"white",
    backgroundColor:"white",
    shadowColor: "white",
  },
  title: {
    fontSize: 27,
    padding:10,
    color:"white",
    backgroundColor:Colors.secondColor,
    width:"100%",
    justifyContent:"center",
    textAlign:"center",
    ...PublicStyles.shadow3
  },
  inContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:25,

  }
});

export default SecondScreen;
