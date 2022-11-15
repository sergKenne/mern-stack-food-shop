import { applyMiddleware, createStore, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducers>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

// export type TypedThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   ReduxState,
//   unknown,
//   AnyAction
// >;
