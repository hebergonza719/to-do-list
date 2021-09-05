import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const MOD_COMPLETED = "MOD_COMPLETED";

export const DELETE_TASK = "DELETE_TASK";

export const ADD_TASK = "ADD_TASK";

export const getData = () => dispatch => {
  if (localStorage.getItem("username")) {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
      .then(res => {
        dispatch({ type: FETCH_DATA, payload: res.data })
      })
      .catch(err => {
        console.error("error fecthing data from API err: ", err);
      });
  } else {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/guest`)
      .then(res => {
        dispatch({ type: FETCH_DATA, payload: res.data })
      })
      .catch(err => {
        console.error("error fecthing data from API err: ", err);
      });
  }
};

export const modCompleted = (id, updatedItem) => dispatch => {
  if (localStorage.getItem("username")) {
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
  } else {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/guest/${id}`, updatedItem)
      .then(res => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/guest`)
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
  }
};

export const deleteTask = (id) => dispatch => {
  if (localStorage.getItem("username")) {
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
  } else {
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/guest/${id}`)
    .then(res => {
      axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_URL}/guest`)
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
  }
};

export const addTask = (newTask) => dispatch => {
  if (localStorage.getItem("username")) {
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
  } else {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/guest`, newTask)
      .then(res => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/guest`)
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
  }
};