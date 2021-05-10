// import * as FileSystem from 'expo-file-system';

// import { insertPlace, fetchPlaces } from '../helpers/db';

export const ADD_TOPİC = 'ADD_TOPİC';
export const SET_TOPİC = 'SET_TOPİC';

export const addPlace = (title, image, location) => {
  return async dispatch => {
      dispatch({
        type: ADD_PLACE,
        topicData: {
          id: dbResult.insertId,
          title: title,
        }
      });
    }
  };


  export const loadTopics = () => {
    return async dispatch => {
      try {
        // const dbResult = await fetchPlaces();
        // console.log(dbResult);
        dispatch({ type: SET_TOPİC, places: dbResult.rows._array });
      } catch (err) {
        throw err;
      }
    };
  };
