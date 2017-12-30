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
  return {
    type: SET_RESTAURANT,
    payload: id
  };
}

// Initial State
const initialState = {
  menu: [],
  restaurant: 'Name',

  restaurants: [],
  isGettingRestaurants: true,
  activeRestaurant: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_RESTAURANTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingRestaurants: true
        }),
        success: prevState => {
          const res = Api.flattenCollection(payload);
          const {
            meals: menu,
            name: restaurant,
            id: activeRestaurant
          } = res.data[0];

          return {
            ...prevState,
            restaurants: res.data,
            menu: Object.keys(menu).map(meal => ({ name: meal, dish: menu[meal] })),
            restaurant,
            activeRestaurant
          }
        },
        finish: prevState => ({
          ...prevState,
          isGettingRestaurants: false
        })
      });

    case SET_RESTAURANT:
      const {
        name: restaurant,
        meals
      } = state.restaurants.filter(rest => rest.id === payload)[0];

      return {
        ...state,
        activeRestaurant: payload,
        restaurant,
        menu: Object.keys(meals).map(meal => ({ name: meal, dish: meals[meal] }))
      }

    default:
      return state;
  }
}

export default reducer;