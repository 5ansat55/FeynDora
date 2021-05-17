
export const PICKERMODAL = 'PICKERMODAL';
export const MULTIPICKERMODAL="MULTIPICKERMODAL";

  export const pickerModal = (openModal) =>{
    return async dispatch => {
        dispatch({
          type: PICKERMODAL,
          openModal:openModal
        });
      }
  };

  export const multiPickerModal = () =>{
    return async dispatch => {
        dispatch({
          type: MULTIPICKERMODAL,
        });
      }
  };


