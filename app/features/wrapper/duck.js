import data from '../../data';
import { flattenData } from '../../config/utils';

// Action Types

// Action Creators

// Initial State
const initialState = {
  menu: flattenData(data.a.menu),
  restaurant: data.a.name
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    

    default:
      return state;
  }
}

export default reducer;