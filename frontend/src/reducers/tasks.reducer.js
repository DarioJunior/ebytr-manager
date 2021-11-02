const INITIAL_STATE = {
  isLoading: true,
  tasks: [],
};

export default function TasksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TASKS_LIST':
    return {
      ...state,
      isLoading: false,
      tasks: action.payload,
    };
  default:
    return state;
  }
}
