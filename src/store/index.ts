import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import axios from "axios";

const GET_INITIAL_DATA_REQUEST = "GET_INITIAL_DATA_REQUEST";
const GET_INITIAL_DATA_FAILURE = "GET_INITIAL_DATA_FAILURE";
const GET_INITIAL_DATA_SUCCESS = "GET_INITIAL_DATA_SUCCESS";

const UPDATE_COLLECTION_REQUEST = "UPDATE_COLLECTION_REQUEST";
const UPDATE_COLLECTION_FAILURE = "UPDATE_COLLECTION_FAILURE";
const UPDATE_COLLECTION_SUCCESS = "UPDATE_COLLECTION_SUCCESS";
/// actions

export const getInitialData =
  (token: string, authenticate: any, getAccessTokenByRefreshToken: any) =>
  (dispatch: any) => {
    dispatch({ type: GET_INITIAL_DATA_REQUEST });
    return axios
      .get("http://127.0.0.1:8000/api/language-cards/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.status === 200) {
          const [data] = response.data;
          authenticate(true);
          dispatch({
            type: GET_INITIAL_DATA_SUCCESS,
            payload: {
              user: {
                username: data.username,
                email: data.email,
                points: data.user_info.points
              },
              collections: [...data.user_info.collection]
            }
          });
        } else {
          authenticate(false);
          dispatch({ type: GET_INITIAL_DATA_FAILURE });
          getAccessTokenByRefreshToken();
        }
      })
      .catch(() => {
        dispatch({ type: GET_INITIAL_DATA_FAILURE });
        getAccessTokenByRefreshToken();
      });
  };

interface EditCollectionInterface {
  id: number;
  learn_language: string;
  name: string;
}

export const editCollection =
  (payload: EditCollectionInterface, token: string | null) =>
  (dispatch: any) => {
    dispatch({ type: UPDATE_COLLECTION_REQUEST });
    return axios
      .get("http://127.0.0.1:8000/api/collections/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        dispatch({ type: UPDATE_COLLECTION_SUCCESS });
        console.log(response);
        console.log(payload);
      })
      .catch(() => {
        dispatch({ type: UPDATE_COLLECTION_FAILURE });
      });
  };

interface UserInterface {
  username: string;
  email: string;
  points: number;
}

interface CardInterface {
  native_word: string;
  learn_word: string;
}

export interface CollectionInterface {
  id: number | null;
  native_language: string;
  learn_language: string;
  name: string;
  language_card?: CardInterface[];
}

interface RootReducerState {
  user?: UserInterface;
  collections?: CollectionInterface[];
}

const initialState: RootReducerState = {};

// eslint-disable-next-line @typescript-eslint/default-param-last
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_INITIAL_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        collections: action.payload.collections
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    rootReducer
  },
  middleware: [reduxThunk]
});

export type RootState = ReturnType<typeof store.getState>;
