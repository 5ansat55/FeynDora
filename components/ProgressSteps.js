import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
//screens
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import FourthScreen from "../screens/FourthScreen";
import FifthScreen from "../screens/FifthScreen";
import SixthScreen from "../screens/SixthScreen";
//style
import Colors from "../constants/Colors";
import PublicStyle from "../constants/PublicStyles";

const CustomProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [second, setMinute] = useState();
  const [dialogOpen,setDialogOpen]=useState(false);
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };
  const progressStepsStyle = {
    activeStepIconBorderColor: Colors.secondColor,
    activeLabelColor: Colors.firstColor,
    activeStepNumColor: Colors.thirdColor,
    activeStepIconColor: "white",
    completedStepIconColor: Colors.thirdColor,
    completedProgressBarColor: Colors.thirdColor,
    completedCheckColor: "white",
    labelFontFamily: "RobotoBlack",
    progressBarColor: "#ebebe4",
  };

  const onNextStep = () => {
    console.log("called next step");
  };

  const inputChangeHandler = (id, value, valid) => {
    console.log(value);
  };

  const defineMinutestoWork = (minute) => {
    setDialogOpen(true);
  };

  const onPaymentStepComplete = () => {
    setActiveStep(1);
  };

  const onPrevStep = () => {
    setActiveStep(0);
  };

  const onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps {...progressStepsStyle} activeStep={activeStep}>
        <ProgressStep
          label=""
          // onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          removeBtnRow={true}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <FirstScreen onNext={onPaymentStepComplete} />
        </ProgressStep>
        <ProgressStep
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          onPrevious={onPrevStep}
          onNext={defineMinutestoWork}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <SecondScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <ThirdScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <FourthScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <FifthScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
          scrollable={false}
          viewProps={{ style: { ...styles.container } }}
        >
          <SixthScreen />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: Colors.thirdColor,
    fontWeight: "bold",
    ...PublicStyle.shadow2,
  },
  container: {
    flex: 1,
  },
});

export default CustomProgressSteps;
