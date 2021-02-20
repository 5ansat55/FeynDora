import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
//pages
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import FourthScreen from "../screens/FourthScreen";
import FifthScreen from "../screens/FifthScreen";
import SixthScreen from "../screens/SixthScreen";

const CustomProgressSteps = ({ defaultScrollViewProps }) => {
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
      <ProgressSteps>
        <ProgressStep
          label=""
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: "center" }}>
            <FirstScreen />
          </View>
        </ProgressStep>
        <ProgressStep label="">
          <View style={{ alignItems: "center" }}>
            <SecondScreen />
          </View>
        </ProgressStep>
        <ProgressStep label="">
          <View style={{ alignItems: "center" }}>
            <ThirdScreen />
          </View>
        </ProgressStep>
        <ProgressStep label="">
          <View style={{ alignItems: "center" }}>
            <FourthScreen />
          </View>
        </ProgressStep>
        <ProgressStep label="">
          <View style={{ alignItems: "center" }}>
            <FifthScreen />
          </View>
        </ProgressStep>
        <ProgressStep label="">
          <View style={{ alignItems: "center" }}>
            <SixthScreen />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

CustomProgressSteps.defaultScrollViewProps = {
  keyboardShouldPersistTaps: "handled",
  contentContainerStyle: {
    flex: 1,
    justifyContent: "center",
  },
};

const styles = StyleSheet.create({});

export default CustomProgressSteps;
