/***
 * Action Types
 */
export enum RepositoryTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

/**
 *  Data Types
 */

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  owner: Owner;
}

/**
 * Owner Interface
 */

interface Owner {
  login: string;
  avatar_url: string;
  html_url: string;
  organizations_url: string;
  repos_url: string;
  type: string;
}

/**
 * State Type
 */

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
