import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Input from "../components/Input";
import CustomText from "../components/CustomText";

const FirstScreen = () => {
  const inputChangeHandler = (id, value, valid) => {
    console.log(value);
  };
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
});

export default FirstScreen;
