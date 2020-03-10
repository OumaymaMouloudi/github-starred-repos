import {LIST, REQUEST} from '../ActionType';
import {GITHUB_REPOS} from '../constants';

export const getLatestRepos = (params, onSuccess) => {
    return {
        params,
        onSuccess,
        type: REQUEST(LIST(GITHUB_REPOS))
    };
};
