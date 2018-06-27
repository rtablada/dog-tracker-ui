import Axios from 'axios';

const apiUrl = 'http://dog-tracker.test/training-types';

/**
 * Creates an action object for TRAINING_TYPE@FINDALL_COMPLETE
 * @param  {Array}  [data=[]]
 * @return {Object}
 */
export function findAllComplete(data = []) {
  return {
    type: 'TRAINING_TYPE@FINDALL_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to find all trainingTypes from the server
 * @return {function}
 */
export function findAll() {
  return dispatch => Axios.get(apiUrl)
    .then(({ data: response }) => {
      dispatch(findAllComplete(response));
    });
}

/**
 * Creates an action object for TRAINING_TYPE@FINDONE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function findOneComplete(data = {}) {
  return {
    type: 'TRAINING_TYPE@FINDONE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to a trainingType based on its id
 * @return {function}
 */
export function findById(id) {
  return dispatch => Axios.get(`${apiUrl}/${id}`)
    .then(({data: response}) => {
      dispatch(findOneComplete(response));
    });
}

/**
 * Creates an action object for TRAINING_TYPE@CREATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function createComplete(data = {}) {
  return {
    type: 'TRAINING_TYPE@CREATE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to create and save a new trainingType on the server
 * @return {function}
 */
export function create(formData) {
  return dispatch => Axios.post(apiUrl, formData)
    .then(({ data: trainingType }) => {
      dispatch(createComplete(trainingType));
    });
}

/**
 * Creates an action object for TRAINING_TYPE@UPDATE_COMPLETE
 * @param  {Object}  [data={}]
 * @return {Object}
 */
export function updateComplete(data = {}) {
  return {
    type: 'TRAINING_TYPE@UPDATE_COMPLETE',
    data
  };
}

/**
 * Creates a thunk to update a trainingType on the server
 * @return {function}
 */
export function update(id, formData) {
  return dispatch => Axios.patch(`${apiUrl}/${id}`, formData)
    .then(({ data: trainingType }) => {
      dispatch(updateComplete(trainingType));
    });
}
