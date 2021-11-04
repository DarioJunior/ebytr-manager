import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ rootReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRouter = (
  component,
  {
    initialState,
    store = createMockStore(initialState),
  } = {},
) => ({
  ...render(
    <Provider store={ store }>
      { component }
    </Provider>, store,
  ),
});

export default renderWithRouter;
