import data from '../../data';

// Action Types

// Action Creators

// Initial State
const initialState = {
  menu: data
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    

    default:
      return state;
  }
}

export default reducer;