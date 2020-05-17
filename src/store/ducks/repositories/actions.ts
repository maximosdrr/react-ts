import { action } from "typesafe-actions";
import { Repository, RepositoryTypes } from "./types";

export const loadRequest = (url: string) =>
  action(RepositoryTypes.LOAD_REQUEST, { url });

export const loadSuccess = (data: Repository[]) =>
  action(RepositoryTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoryTypes.LOAD_FAILURE);

export const setRepoUrl = (url: string) => action(RepositoryTypes.SET_REPO_URL, { url })
