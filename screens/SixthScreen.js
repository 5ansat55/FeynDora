import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import CustomText from "../components/CustomText";
import MultiPickerDialog from "../components/MultiPickerMaterialDialog";

//Styles
import Colors from "../constants/Colors";
import PublicStyles from "../constants/PublicStyles";

const Item = ({ title }) => {
  const [multiPickerVisible, setMultiPickerVisible] = useState(false);
  const [multiPickerSelectedItems, setMultiPickerSelectedItems] = useState();

  const arrInModel = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
  ];

  const openMultiPickerModal = () => {
    setMultiPickerVisible(prev => !prev);
  };

 
  return (
    <TouchableWithoutFeedback onPress={openMultiPickerModal}>
      <View style={styles.item}>
      <MultiPickerDialog
        onArr={arrInModel}
        onChange={openMultiPickerModal}
        multiPickerVisible={multiPickerVisible}
        multiPickerSelectedItems={multiPickerSelectedItems}
      />
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const FifthScreen = () => {
  const Arr = [
    { id: 1, title: "title1" },
    { id: 2, title: "title2" },
    { id: 3, title: "title3" },
  ];

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <CustomText title="Done" subTitle="" style={styles.title} />
      <View style={styles.shell}>
        <FlatList
          data={Arr}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  shell: {},
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "RobotoBold",
    fontSize: 27,
    padding: 10,
    color: "whitesmoke",
    backgroundColor: Colors.secondColor,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    ...PublicStyles.shadow3,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "RobotoMedium",
    color: "#373737",
    fontWeight: "500",
  },
  checkbox: {
    // flexDirection: "row",
    alignSelf: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    ...PublicStyles.shadow2,
  },
});

export default FifthScreen;
