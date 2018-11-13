import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules'

const initialState = {}
const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  // TODO: add some middleware for better development experience, such as redux-logger, redux-development
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(rootReducer, initialState, composedEnhancers)
