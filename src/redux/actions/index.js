import {LIST, REQUEST} from '../ActionType';
import {GITHUB_REPOS} from '../constants';

export const getLatestRepos = (params) => {
    return {
        params,
        type: REQUEST(LIST(GITHUB_REPOS))
    };
};
