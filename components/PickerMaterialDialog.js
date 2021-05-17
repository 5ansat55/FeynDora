import React, { useCallback, useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialDialog } from "react-native-material-dialog";
import * as helpersAction from "../store/actions/helpersAction";


const PickerMaterialDialog = ({onVisible,onOpenPickerModal}) => {
    // const [visible,setVisible] = useState(false);

// useEffect(()=>{

// },[onVisible]);

  return (
    <MaterialDialog
      title="Update the title"
      visible={onVisible}
      onOk={onOpenPickerModal}
      onCancel={onOpenPickerModal}
    >
      <Text style={styles.dialogText}>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </Text>
    </MaterialDialog>
  );
};

const styles = StyleSheet.create({
  dialogText: {},
});

export default PickerMaterialDialog;
