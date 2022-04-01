import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import axios from "axios";
import { DataToRegister } from "../types";

const GET_INITIAL_DATA_REQUEST = "GET_INITIAL_DATA_REQUEST";
const GET_INITIAL_DATA_FAILURE = "GET_INITIAL_DATA_FAILURE";
const GET_INITIAL_DATA_SUCCESS = "GET_INITIAL_DATA_SUCCESS";

const UPDATE_COLLECTION_REQUEST = "UPDATE_COLLECTION_REQUEST";
const UPDATE_COLLECTION_FAILURE = "UPDATE_COLLECTION_FAILURE";
const UPDATE_COLLECTION_SUCCESS = "UPDATE_COLLECTION_SUCCESS";

const ADD_COLLECTION_REQUEST = "ADD_COLLECTION_REQUEST";
const ADD_COLLECTION_FAILURE = "ADD_COLLECTION_FAILURE";
const ADD_COLLECTION_SUCCESS = "ADD_COLLECTION_SUCCESS";

const DELETE_COLLECTION_REQUEST = "DELETE_COLLECTION_REQUEST";
const DELETE_COLLECTION_SUCCESS = "DELETE_COLLECTION_SUCCESS";
const DELETE_COLLECTION_FAILURE = "DELETE_COLLECTION_FAILURE";

const ADD_CARD_REQUEST = "ADD_CARD_REQUEST";
const ADD_CARD_FAILURE = "ADD_CARD_FAILURE";
const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS";

const DELETE_CARD_REQUEST = "DELETE_CARD_REQUEST";
const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
const DELETE_CARD_FAILURE = "DELETE_CARD_FAILURE";

const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const UPDATE_POINTS_REQUEST = "UPDATE_POINTS_REQUEST";
const UPDATE_POINTS_SUCCESS = "UPDATE_POINTS_SUCCESS";
const UPDATE_POINTS_FAILURE = "UPDATE_POINTS_FAILURE";

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
                points: data.user_info.points,
                userInfoId: data.user_info.id
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

interface EditDataInterface {
  learn_language: string;
  name: string;
}

interface EditCollectionInterface {
  id: number;
  editData: EditDataInterface;
}

interface CardManagingInterface {
  native_word: string;
  learn_word: string;
  collection: number;
}

interface AddCollectionInterface {
  owner: null;
  native_language: string;
  learn_language: string;
  name: string;
}

export const updatePointsAction =
  (token: string | null, id: number | null, points: number) =>
  (dispatch: any) => {
    dispatch({ type: UPDATE_POINTS_REQUEST });
    return axios
      .patch(
        `http://localhost:8000/api/user_info/${id}/`,
        { points },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(() => dispatch({ type: UPDATE_POINTS_SUCCESS, payload: points }))
      .catch(() => dispatch({ type: UPDATE_POINTS_FAILURE }));
  };

export const registerUser =
  (
    dataToregister: DataToRegister,
    setRecordExsistMessage: (a: string) => void
  ) =>
  (dispatch: any) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    return axios
      .post("http://localhost:8000/api/register/", dataToregister)
      .then((response) => {
        dispatch({ type: REGISTER_USER_SUCCESS });
        if (response.status >= 200 && response.status < 400) {
          setRecordExsistMessage("");
        }
        console.log(response);
      })
      .catch((e) => {
        dispatch({ type: REGISTER_USER_FAILURE });
        if (e.response.status === 409) {
          setRecordExsistMessage(e.response.data);
        }
      });
  };

export const addCollectionAction =
  (dataToSend: AddCollectionInterface, token: string | null) =>
  (dispatch: any) => {
    dispatch({ type: ADD_COLLECTION_REQUEST });
    return axios
      .post(`http://127.0.0.1:8000/api/collection/`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(({ data }) => {
        dispatch({
          type: ADD_COLLECTION_SUCCESS,
          payload: { ...data, language_card: [] }
        });
      })
      .catch(() => {
        dispatch({ type: ADD_COLLECTION_FAILURE });
      });
  };

export const deleteCollectionAction =
  (id: number, token: string | null) => (dispatch: any) => {
    dispatch({ type: DELETE_COLLECTION_REQUEST });
    return axios
      .delete(`http://127.0.0.1:8000/api/collection/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        dispatch({
          type: DELETE_COLLECTION_SUCCESS,
          payload: id
        });
      })
      .catch(() => {
        dispatch({ type: DELETE_COLLECTION_FAILURE });
      });
  };

export const deleteLanguageCard =
  (id: number, token: string | null, collectionId: number) =>
  (dispatch: any) => {
    dispatch({ type: DELETE_CARD_REQUEST });
    return axios
      .delete(`http://127.0.0.1:8000/api/edit_language_cards/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        dispatch({ type: DELETE_CARD_SUCCESS, payload: { collectionId, id } });
      })
      .catch(() => dispatch({ type: DELETE_CARD_FAILURE }));
  };

export const addLanguageCard =
  (payload: CardManagingInterface, token: string | null) => (dispatch: any) => {
    dispatch({ type: ADD_CARD_REQUEST });
    return axios
      .post("http://127.0.0.1:8000/api/edit_language_cards/", payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(({ data }) => {
        dispatch({ type: ADD_CARD_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: ADD_CARD_FAILURE });
      });
  };

export const editCollection =
  (payload: EditCollectionInterface, token: string | null) =>
  (dispatch: any) => {
    dispatch({ type: UPDATE_COLLECTION_REQUEST });
    return axios
      .patch(
        `http://127.0.0.1:8000/api/collection/${payload.id}/`,
        payload.editData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(({ data }) => {
        dispatch({
          type: UPDATE_COLLECTION_SUCCESS,
          payload: {
            id: data.id,
            native_language: data.native_language,
            learn_language: data.learn_language,
            name: data.name,
            language_card: data.language_card
          }
        });
      })
      .catch(() => {
        dispatch({ type: UPDATE_COLLECTION_FAILURE });
      });
  };

interface UserInterface {
  username: string;
  email: string;
  points: number;
  userInfoId: number;
}

interface CardInterface {
  native_word: string;
  learn_word: string;
  id: number;
}

export interface CollectionInterface {
  id: number | null;
  native_language: string;
  learn_language: string;
  name: string;
  language_card: CardInterface[];
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
    case UPDATE_COLLECTION_SUCCESS:
      return Array.isArray(state.collections)
        ? {
            ...state,
            collections: [
              ...state.collections.filter(
                (item) => item.id !== action.payload.id
              ),
              action.payload
            ]
          }
        : {
            ...state,
            collections: [action.payload]
          };
    case ADD_COLLECTION_SUCCESS:
      return Array.isArray(state.collections)
        ? {
            ...state,
            collections: [...state.collections, action.payload]
          }
        : {
            ...state,
            collections: [action.payload]
          };
    case DELETE_COLLECTION_SUCCESS:
      return Array.isArray(state.collections)
        ? {
            ...state,
            collections: state.collections.filter(
              (item) => item.id !== action.payload
            )
          }
        : {
            ...state
          };
    case ADD_CARD_SUCCESS:
      return Array.isArray(state.collections)
        ? {
            ...state,
            collections: [
              ...state.collections.filter(
                (item) => item.id !== action.payload.collection
              ),
              {
                ...state.collections.filter(
                  (item) => item.id === action.payload.collection
                )[0],
                language_card: [
                  ...state.collections.filter(
                    (item) => item.id === action.payload.collection
                  )[0].language_card,
                  {
                    id: action.payload.id,
                    native_word: action.payload.native_word,
                    learn_word: action.payload.learn_word
                  }
                ]
              }
            ]
          }
        : {
            ...state
          };
    case DELETE_CARD_SUCCESS:
      return Array.isArray(state.collections)
        ? {
            ...state,
            collections: [
              ...state.collections.filter(
                (item) => item.id !== action.payload.collectionId
              ),
              {
                ...state.collections.filter(
                  (item) => item.id === action.payload.collectionId
                )[0],
                language_card: [
                  ...state.collections
                    .filter(
                      (item) => item.id === action.payload.collectionId
                    )[0]
                    .language_card.filter(
                      (card) => card.id !== action.payload.id
                    )
                ]
              }
            ]
          }
        : {
            ...state
          };
    case UPDATE_POINTS_SUCCESS:
      return state.user
        ? {
            ...state,
            user: {
              ...state.user,
              points: action.payload
            }
          }
        : {
            ...state
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
