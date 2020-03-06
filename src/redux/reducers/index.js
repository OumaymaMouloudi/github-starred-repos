import {combineReducers} from 'redux';
import GithubRepos from "./github-repos";

export default combineReducers({
    Repos: GithubRepos,
});

