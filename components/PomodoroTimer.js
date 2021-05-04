import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import Color from "../constants/Colors";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import Colors from "../constants/Colors";
import PublicStyles from "../constants/PublicStyles";
import moment from "moment";

const PomodoroTimer = (props) => {
  // const [timeSecond, setTimeSecond] = useState(props.second);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(60000 * 30);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [timeMinute, setTimeMinute] = useState();
  const [showWorkedTime, setShowWorkedTime] = useState("");
  const [pomodoroList, setPomodoroList] = useState([]);

  // const renderItem = ({ item }) => <Text style={styles.minuteText}>{item}</Text>;

  //conver to second to full time
  var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  const ChangeHandler = async (event) => {
    try {
      setTimeMinute(parseInt(event) * 60000);
      setIsTimerStart(false);
      setResetTimer(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeFunc = (time) => {
    // console.log(time);
    // setPomodoroList([...pomodoroList,time])
  };
  const handleFinish = async () => {
     setPomodoroList([
      ...pomodoroList,
      {
        id: Math.random().toString(),
        time: toHHMMSS(timerDuration / 1000),
      },
    ]);
      reset();
  };

  // setResetStopwatch(false);

  const reset = () => {
    if (timerDuration !== null) {
      setTimeMinute(timerDuration);
    } else {
      setTimeMinute(30);
    }
    setIsTimerStart(!isTimerStart);
    setResetTimer(!resetTimer);
    console.log(pomodoroList);
  };

  useEffect(() => {
    setTimerDuration(timeMinute);
  }, [timeMinute, ChangeHandler]);

  // useEffect(()=>{

  // },[isTimerStart]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Set the time in minute type</Text>
        <View style={styles.sectionStyle}>
          <TextInput
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
            clearTextOnFocus={true}
            keyboardType="numeric"
            onChangeText={(text) => ChangeHandler(text)}
            style={styles.textMinutest}
            placeholder="30"
          ></TextInput>
          <View style={styles.minuteView}>
            {pomodoroList && (
              <FlatList
                data={pomodoroList}
                renderItem={({ item }) => {
                  <Text style={styles.minuteText}>{item.time}</Text>;
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </View>
          <Timer
            totalDuration={timerDuration}
            msecs
            // Time Duration
            start={isTimerStart}
            // To start
            reset={resetTimer}
            // To reset
            options={options}
            // Options for the styling
            handleFinish={handleFinish}
            // Can call a function On finish of the time
            getTime={getTimeFunc}
          />
          <TouchableHighlight
            style={styles.touchable}
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}
          >
            <Text style={styles.buttonText}>
              {!isTimerStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable} onPress={reset}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PomodoroTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  sectionStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    backgroundColor: "white",
    fontSize: 20,
    padding: 20,
    ...PublicStyles.shadow2,
  },
  textMinutest: {
    marginBottom: "5%",
    // alignItems:"center",
    // justifyContent: "center",
    borderColor: "green",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
  },
  minuteView: {
    marginBottom: 20,
    width: "100%",
    minWidth: "100%",
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 2,
    color:"black"
  },
  minuteText: {
    color: "#424242",
    textAlign: "center",
    fontFamily: "RobotoBlack",
    fontSize: 15,
  },
  touchable: {
    marginBottom: 5,
    marginTop: 5,
  },
});

const options = {
  container: {
    backgroundColor: Colors.thirdColor,
    padding: 5,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
