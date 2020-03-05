import { fork } from 'redux-saga/effects';
import {rootSaga} from './watchers';

export default function* startForman(watchers) {
    yield fork(rootSaga,watchers);
}
