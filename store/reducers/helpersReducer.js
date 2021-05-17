import { PICKERMODAL, MULTIPICKERMODAL } from "../actions/helpersAction";

const initialState = {
  triggers:{
      pickerModal:false,
      multiPickerModal:false,
  }
};

export default (state = initialState, action) => {
  switch (action.type) {   
    case PICKERMODAL:
        console.log(action.openModal);
      return {
          ...state,
          pickerModal:action.openModal
      };
    
    case MULTIPICKERMODAL:
      return state;

    default:
      return state;
  }
};
