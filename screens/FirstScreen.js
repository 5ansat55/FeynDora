import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Input from "../components/Input";
import CustomText from "../components/CustomText";
import Colors from "../constants/Colors";
import Item from "../components/Item";
import RoundButton from "../components/RoundButton";
import { useDispatch, useSelector } from "react-redux";
import * as firstScreenActions from "../store/actions/firstScreenAction";
import PickerMaterialDialog from "../components/PickerMaterialDialog";

const FirstScreen = ({ onNext }) => {
  const [title, setTitle] = useState("");
  const [focus,setFocus] = useState(false);
  const [visible,setVisible] = useState(false);
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.firstScreen.topics);

  const textInput = useRef(null);

  const inputChangeHandler = (id, value, valid) => {
    setTitle(value);
    // console.log(value);
  };

  const addTopic = () => {
    dispatch(firstScreenActions.addTopic(title, "0", 0));
    setTitle("");
  };

  const deleteTopic = (id) => {
    dispatch(firstScreenActions.delTopic(id));
  };


  //MODEL KULLANARAK YAPACAKSIN !

  const updateTopic = ({id,title,totalTime,done}) =>{
    openPickerModal()
    // console.log({
    //   id:id,
    //   title:title,
    //   totalTime:totalTime,
    //   done:done
    // });
    console.log("calistim");
    console.log(title);
    // dispatch(firstScreenActions.uptTopic(id,title,totalTime,done));
  };

  const openPickerModal = () => {
    setVisible(prev => !prev);
  };

  useEffect(() => {
    dispatch(firstScreenActions.loadTopic());
  }, [dispatch, deleteTopic, addTopic, updateTopic]);

  const renderItem = ({ item }) => (
    <Item
      data={item}
      onDeleteTopic={deleteTopic}
      onUptadeTopic={updateTopic}
      icon="school"
      onNext={onNext}
    />
  );

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-462c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-483d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-4711f-bd96-145571e29d72",
      title: "Third mmmmmmmmmmmmmmmmmsdfsdf",
    },
  ];

  return (
    <View style={styles.container}>
    <PickerMaterialDialog onVisible={visible} onOpenPickerModal={openPickerModal} />
      <CustomText title="Define your topics" subTitle="which you learn" />
      <View style={styles.inContainer}>
        <Input
          id="title"
          label="Topic"
          errorText="Please enter a valid topic!"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="done"
          defaultValue={title}
          onInputChange={inputChangeHandler}
          required
          placeholder="Write a topic..."
        />
        <RoundButton icon="add-sharp" onPress={addTopic} />
      </View>

      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  inContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FirstScreen;
