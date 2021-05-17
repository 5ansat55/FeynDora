// import * as FileSystem from 'expo-file-system';

import { insertTopic , fetchTopic, deleteTopic, updateTopic } from "../../helpers/db";

export const ADD_TOPİC = 'ADD_TOPİC';
export const SET_TOPİC = 'SET_TOPİC';
export const DELETE_TOPİC = 'DELETE_TOPİC';
export const UPTADE_TOPIC = 'UPTADE_TOPIC';


export const addTopic = (title, totalTime="0", done=0) => {
  return async dispatch => {
    const dbResult = await insertTopic(
      title,
      totalTime,
      done,
    );
    console.log("added topic",dbResult);

      dispatch({
        type: ADD_TOPİC,
        topicData: {
          title: title,
          totalTime:totalTime,
          done:done
        }
      });
    }
  };

  export const delTopic = (id) =>{
    return async dispatch => {
      const dbResult = await deleteTopic(id);
      console.log("deleted topic",dbResult);
        dispatch({
          type: DELETE_TOPİC,
        });
      }
  };


  export const loadTopic = () => {
    return async dispatch => {
      try {
        const dbResult = await fetchTopic();
        // console.log("Come out topics",dbResult);
        dispatch({ type: SET_TOPİC, topics: dbResult.rows._array });
      } catch (err) {
        throw err;
      }
    };
  };

  export const uptTopic = (id,title,totalTime,done) => {
    return async dispatch => {
      const dbResult = await updateTopic(
        id,
        title,
        totalTime,
        done,
      );
      console.log("updated topic",dbResult);
        dispatch({
          type: UPTADE_TOPIC,
          topicData: {
            title: title,
            totalTime:totalTime,
            done:done
          }
        });
      }
  }
