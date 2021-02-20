import React from "react";
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
  };

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPaymentStepComplete = () => {
    alert("Payment step completed!");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label=""
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
        >
          <FirstScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
        >
          <SecondScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
        >
          <ThirdScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
        >
          <FourthScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
        >
          <FifthScreen />
        </ProgressStep>
        <ProgressStep
          label=""
          label=""
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={styles.buttonTextStyle}
          previousBtnTextStyle={styles.buttonTextStyle}
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
    ...PublicStyle.shadow2
  },
});

export default CustomProgressSteps;
