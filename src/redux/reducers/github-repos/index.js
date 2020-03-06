import {GITHUB_REPOS} from '../../constants';
import {FAILURE, LIST, REQUEST, SUCCESS} from '../../ActionType';

const initialState = {
    loading: false,
    list: [],
    count:0,
    error: undefined
};

const GithubRepos = (state = initialState, action) => {
    const response = action.response;
    console.log({response})
    switch (action.type) {
        case REQUEST(LIST(GITHUB_REPOS)):
            return {...state, loading: true};
        case SUCCESS(LIST(GITHUB_REPOS)):
            return {...state, loading: false, list: response.items, count:response.total_count};
        case FAILURE(LIST(GITHUB_REPOS)):
            return {...state, error: action.error};
        default:
            return state;
    }
};
export default GithubRepos;
