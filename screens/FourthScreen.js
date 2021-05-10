import * as React from 'react';
import { StyleSheet, View, Text,StatusBar,Alert } from "react-native";
import Constants from 'expo-constants';
import TextAnimator from '../components/TextAnimator';

const FourthScreen = () => {
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };
  return (
    <View>
      <TextAnimator
        content="Tell it yourself if you cannot explain it to a six-year-old.You probably don't understand it yourself. ❤️️️️"
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={1000}
        onFinish={_onFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: 'RobotoLight',
    marginBottom: 14
  }
});

export default FourthScreen;
