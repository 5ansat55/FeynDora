import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CustomProgressSteps from "./components/ProgressSteps";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <CustomProgressSteps />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },
});
