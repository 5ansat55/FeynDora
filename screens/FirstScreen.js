import React from "react";
import { StyleSheet, View, Text,FlatList } from "react-native";
import Input from "../components/Input";
import CustomText from "../components/CustomText";
import Colors from "../constants/Colors";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FirstScreen = () => {
  const inputChangeHandler = (id, value, valid) => {
    console.log(value);
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const renderItem = ({ item }) => <Item title={item.title} />;


  return (
    <View style={styles.container}>
      <CustomText title="Define your topics" subTitle="which you learn" />
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
      />
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex:1,
    width:"100%",
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
  },
});

export default FirstScreen;
