import {call, put, takeLatest} from 'redux-saga/effects';
import {GITHUB_REPOS} from '../../constants';
import {FAILURE, LIST, REQUEST, SUCCESS} from '../../ActionType';
import {getGithubRepos} from '../../../services/github-repos';


export function* get() {
    try {
        const response = yield call(getGithubRepos);
        yield put({type: SUCCESS(LIST(GITHUB_REPOS)), response});

    } catch(error) {

        yield put({ type: FAILURE(LIST(GITHUB_REPOS)), error });
    }
}

export function* watchGithubRepos() {
    yield takeLatest(REQUEST(LIST(GITHUB_REPOS)), get);
}
