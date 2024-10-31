import {INITIALIZED, USER} from '../state/types';

const InitialState = {
  intialized: false,
  user: null,
};

const reducer = (State = InitialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...State,
        intialized: true,
      };
    case USER:
      return {
        ...State,
        user: action.payload,
      };

    default:
      return State;
  }
};

export default reducer;
