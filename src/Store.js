import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))

const store = createStore(reducers, {}, enhancer)

export default store