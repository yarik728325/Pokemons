import { combineReducers, configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit"
import  pockemons  from './pockemons/pockemons'
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const rootReducer = combineReducers({
  pockemons
}) // Все что ниже - это стор ;



let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware];
const store = configureStore({
  reducer:rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga);

export default store;