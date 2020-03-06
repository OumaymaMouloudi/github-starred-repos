import { all } from 'redux-saga/effects';
import {watchGithubRepos} from './github-repos';

export function* rootSaga() {
  yield all([
    watchGithubRepos()
  ]);
}
