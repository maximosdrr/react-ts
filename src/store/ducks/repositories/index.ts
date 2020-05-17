import { RepositoriesState, RepositoryTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
  url: "users/maximosdrr/repos",
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoryTypes.SET_REPO_URL:
      return { ...state, url: `users/${action.payload.url}/repos` };
    case RepositoryTypes.LOAD_REQUEST:
      return { ...state, loading: true, url: action.payload.url };
    case RepositoryTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case RepositoryTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
