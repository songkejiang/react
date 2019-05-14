import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import mySaga from './sagas'
// import thunk from 'redux-thunk'
import reducer from './reducer'
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;
// const store = createStore(
//   reducer,
//   composeEnhancers()
//   applyMiddleware(sagaMiddleware)
// )
const enhancer = composeEnhancers(
  applyMiddleware()
)
const store = createStore(reducer, enhancer)
// sagaMiddleware.run(mySaga)
export default store
