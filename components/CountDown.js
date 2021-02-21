import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";

export default Timer = (props) => {
  const [timeSecond, setTimeSecond] = useState(props.second);
  useEffect(() => {
    setTimeSecond(props.second);
  }, [props.second]);
  return (
    <CountDown
      size={20}
      until={props.second * 60}
      onFinish={() => alert("Finished")}
      digitStyle={{
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#1CC625",
      }}
      digitTxtStyle={{ color: "#1CC625" }}
      timeLabelStyle={{ color: "red", fontWeight: "bold" }}
      separatorStyle={{ color: "#1CC625" }}
      timeToShow={["H", "M", "S"]}
      timeLabels={{ m: null, s: null }}
      showSeparator
      running={props.startTime}
    />
  );
};

const styles = StyleSheet.create({});
