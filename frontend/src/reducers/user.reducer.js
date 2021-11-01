const INITIAL_STATE = {
  isLoggedIn: false,
  user: { 
    name: '',
    email: '',
    password: '',
    role: '',
  }
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        user: action.payload,
      }
    default:
      return state;
  }
}