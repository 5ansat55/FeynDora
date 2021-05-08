import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { MultiPickerMaterialDialog } from "react-native-material-dialog";

const MultiPickerDialog = ({
  onArr,
  onChange,
  multiPickerVisible,
  multiPickerSelectedItems,
}) => {
  const [multiSelectedItem, setMultiSelectedItem] = useState([]);
  useEffect(() => {
    onChange;
    console.log(multiSelectedItem);
  }, [onChange]);

  return (
    <MultiPickerMaterialDialog
      title={"Pick some elements!"}
      colorAccent={Colors.red}
      items={onArr.map((row, index) => {
        return { value: row.id, label: row.title };
      })}
      visible={multiPickerVisible}
      selectedItems={multiPickerSelectedItems}
      onCancel={onChange}
      onOk={(result) => {
        setMultiSelectedItem({
          MultiSelectedItem: result.selectedItems,
        });
        onChange();
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default MultiPickerDialog;
