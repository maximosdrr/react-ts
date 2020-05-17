import { createStore, applyMiddleware, Store } from "redux";
import { RepositoriesState } from "./ducks/repositories/types";
import createSagaMiddleware from "redux-saga";
import rootReduce from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReduce,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
