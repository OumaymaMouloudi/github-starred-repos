import {GITHUB_REPOS} from '../../constants';
import {FAILURE, LIST, REQUEST, SUCCESS} from '../../ActionType';
import {concat} from 'lodash';

const initialState = {
    loading: false,
    list: [],
    count:0,
    hasMore:true,
    error: undefined
};

const GithubRepos = (state = initialState, action) => {
    const response = action.response;
    switch (action.type) {
        case REQUEST(LIST(GITHUB_REPOS)):
            return {...state, loading: true};
        case SUCCESS(LIST(GITHUB_REPOS)):
            return {...state, loading: false, hasMore: !response.incomplete_results,list: concat(state.list, response.items), count:response.total_count};
        case FAILURE(LIST(GITHUB_REPOS)):
            return {...state, error: action.error};
        default:
            return state;
    }
};
export default GithubRepos;
