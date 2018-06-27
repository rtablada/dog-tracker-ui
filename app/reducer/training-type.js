import _ from 'lodash';


export default function books(state = [], action) {
  switch (action.type) {
    case 'TRAINING_TYPE@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, 'id');
    case 'TRAINING_TYPE@FINDONE_COMPLETE':
    case 'TRAINING_TYPE@CREATE_COMPLETE':
    case 'TRAINING_TYPE@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    default:
      return state;
  }
}
