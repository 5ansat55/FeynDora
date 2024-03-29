import { StatusBar } from "expo-status-bar";
import React,{useEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import CustomProgressSteps from "./components/ProgressSteps";
import * as Font from "expo-font";
import Colors from "./constants/Colors";
//I get redux for more readable
import { Provider, store } from "./store/setupRedux";
//SQLİTE
import {initTable1} from "./helpers/db";

initTable1()
.then(()=>{
  console.log("Initialized database");
})
.catch(err=>{
  console.log("Initializing db failed");
  console.log(err);
});

export default function App() {
  const [loaded] = Font.useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBlackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoLightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoMediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
    RobotoThinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }



  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FEYNDORO</Text>
        <CustomProgressSteps />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  title: {
    fontFamily: "RobotoBlack",
    fontSize: 20,
    color: Colors.thirdColor,
  },
});
