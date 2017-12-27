import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
const GET_RESTAURANTS = 'GLOB/GET_RESTAURANTS';
const SET_RESTAURANT = 'SETTINGS/SET_RESTAURANT';

// Action Creators
export const getRestaurants = () => {
  return dispatch => {
    dispatch({
      type: GET_RESTAURANTS,
      promise: Api.getRestaurants()
    });
  };
};

export const setActiveRestaurant = id => {
  return dispatch => {
    dispatch(getMenu(id));
    return {
      type: SET_RESTAURANT,
      payload: id
    };
  }
}

// Initial State
const initialState = {
  menu: [],
  restaurant: 'Name',

  restaurants: [],
  activeRestaurant: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RESTAURANTS:
      return handle(state, action, {
        success: prevState => {
          const res = Api.flattenCollection(payload);

          return {
            ...prevState,
            restaurants: res.data,
          }
        }
      });

    case SET_RESTAURANT:
      return {
        ...state,
        activeRestaurant: payload
      }

    default:
      return state;
  }
}

export default reducer;