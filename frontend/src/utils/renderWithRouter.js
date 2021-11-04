import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ rootReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRouter = (
  component,
  initialState,
  store = createMockStore(initialState),
) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Provider store={ store }>
        <Router
          history={ history }
        >
          { component }
        </Router>
      </Provider>, store, history,
    ),
  });
};

export default renderWithRouter;
