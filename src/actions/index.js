import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_DATA = "FETCH_DATA";

export const MOD_COMPLETED = "MOD_COMPLETED";

export const DELETE_TASK = "DELETE_TASK";

export const ADD_TASK = "ADD_TASK";

export const getData = () => dispatch => {
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
    .then(res => {
      dispatch({ type: FETCH_DATA, payload: res.data })
    })
    .catch(err => {
      console.error("error fecthing data from API err: ", err);
    });
};

export const modCompleted = (id, updatedItem) => dispatch => {
  axiosWithAuth()
    .put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`, updatedItem)
    .then(res => {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
        .then(res => {
          dispatch({ type: MOD_COMPLETED, payload: res.data })
        })
        .catch(err => {
          console.error("error fecthing data from API err: ", err);
        });
    })
    .catch(err => {
      console.log(err);
    })
};

export const deleteTask = (id) => dispatch => {
  axiosWithAuth()
    .delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${id}`)
    .then(res => {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
        .then(res => {
          dispatch({ type: DELETE_TASK, payload: res.data })
        })
        .catch(err => {
          console.error("error fecthing data from API err: ", err);
        });
    })
    .catch(err => {
      console.log(err);
    })
};

export const addTask = (newTask) => dispatch => {
  axiosWithAuth()
    .post(`${process.env.REACT_APP_BACKEND_URL}/tasks`, newTask)
    .then(res => {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
        .then(res => {
          dispatch({ type: ADD_TASK, payload: res.data })
        })
        .catch(err => {
          console.error("error fecthing data from API err: ", err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};