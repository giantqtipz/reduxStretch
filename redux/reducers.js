const { spookyTypes } = require('./types');

const initialState = {
  // code initial state here
  steps: 0,
  spookySounds: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'incrementStep':
    return {
      
    }
    default:
      return state;
  }
};

module.exports = rootReducer;
