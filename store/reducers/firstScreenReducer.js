import { ADD_TOPİC, SET_TOPİC } from "../actions/firstScreenAction";
import Topic from "../../model/Topic";

const initialState = {
  topics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPİC:
      return {
        topics: action.topics.map(
          (tpc) => new Topic(tpc.id.toString(), tpc.title)
        ),
      };

    case ADD_TOPİC:
      const newTopic = new Topic(
        action.topicData.id.toString(),
        action.topicData.title
      );
      return {
        topics: state.topics.concat(newTopic),
      };

    default:
      return state;
  }
};
