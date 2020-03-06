import {LIST, REQUEST} from '../ActionType';
import {GITHUB_REPOS} from '../constants';

export const getLatestRepos = () => {
    return {
        type: REQUEST(LIST(GITHUB_REPOS))
    };
};