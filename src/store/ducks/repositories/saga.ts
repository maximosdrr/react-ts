import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";

export function* load(action: any) {
  try {
    const response = yield call(api.get, action.payload.url);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
