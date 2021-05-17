import { ADD_TOPİC, SET_TOPİC ,DELETE_TOPİC,UPTADE_TOPIC} from "../actions/firstScreenAction";
import Topic from "../../model/Topic";

const initialState = {
  topics: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPİC:
      return {
        topics: action.topics.map(
          (tpc) => new Topic(tpc.id.toString(),tpc.title,tpc.totalTime,tpc.done)
        ),
      };

    case ADD_TOPİC:
      const newTopic = new Topic(
        action.topicData.title,
        action.topicData.totalTime,
        action.topicData.done
      );
      return {
        topics: state.topics.concat(newTopic),
      };
    
    case DELETE_TOPİC:
      return state;
    
    case UPTADE_TOPIC:
      return state;

    default:
      return state;
  }
};
