import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../reduxToolkit/catReducer';

import { rootSaga } from '../reduxToolkit/saga/rootSaga';

const catSagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catSagaMiddleware),
});

catSagaMiddleware.run(rootSaga);

export default store;
