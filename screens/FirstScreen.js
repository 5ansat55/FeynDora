import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Input from "../components/Input";
import CustomText from "../components/CustomText";
import Colors from "../constants/Colors";
import Item from "../components/Item";
import RoundButton from "../components/RoundButton";

const FirstScreen = ({ onNext }) => {
  const inputChangeHandler = (id, value, valid) => {
    console.log(value);
  };
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-462c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-483d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-4711f-bd96-145571e29d72",
      title: "Third mmmmmmmmmmmmmmmmmsdfsdf",
    },
  ];
  const renderItem = ({ item }) => <Item title={item.title} icon="school" onNext={onNext} />;

  return (
    <View style={styles.container}>
      <CustomText title="Define your topics" subTitle="which you learn" />
      <View style={styles.inContainer}>
      <Input
        id="title"
        label="Topic"
        errorText="Please enter a valid topic!"
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect
        returnKeyType="next"
        onInputChange={inputChangeHandler}
        required
        placeholder="Write a topic..."
      />
      <RoundButton icon="add-sharp" />
      </View>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",

  }
});

export default FirstScreen;
