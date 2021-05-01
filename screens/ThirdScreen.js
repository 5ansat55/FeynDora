import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomText from "../components/CustomText";
import PomodoroTimer from "../components/PomodoroTimer";

const ThirdScreen = () => {
  const studyTopic ="Calışılan Konu";
  const [second,setSecond] = useState(1);
  const [startTime,setStartTime] = useState(false);
  return (
    <View style={styles.container}>
      <CustomText title="Learning with pomodoro with feynman " subTitle={`let us start to learn ${studyTopic}`} />
    <PomodoroTimer></PomodoroTimer>
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
  countdown:{
    margin:20,
    padding:20
  }
});

export default ThirdScreen;
