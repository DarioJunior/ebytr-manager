const INITIAL_STATE = {
  isLoggedIn: false,
  user: { 
    name: '',
    email: '',
    role: '',
  }
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    default:
      return state;
  }
}