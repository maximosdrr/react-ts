import React from "react";
import RepositoryList from "./components/repository-list";
import { Provider } from "react-redux";

import store from "./store";
const App = () => (
  <Provider store={store}>
    <RepositoryList></RepositoryList>
  </Provider>
);

export default App;
