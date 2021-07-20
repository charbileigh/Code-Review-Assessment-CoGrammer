import axios from 'axios';
import { GET_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from './types';
import { returnErrors } from './errorAction';
import { tokenConfig } from './authAction';

export const getTasks = () => (dispatch) => {
    axios.get('/api/items')
        .then(res =>
        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
        )
        .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const createTasks = (task) => (dispatch, getState) => {
    axios.post('/api/items', task, tokenConfig(getState))
        .then(res =>
        dispatch({
            type: CREATE_TASK,
            payload: res.data
        })
        )
        .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
        );
};
export const updateTasks = () => {
    return {
        type: UPDATE_TASK
    };
};

export const deleteTasks = (id) => (dispatch, getState) => {
  axios.delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
