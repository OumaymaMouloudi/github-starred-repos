import {GITHUB_ENDPOINT} from './endpoints';
import axios from '../../config/axios';

export const getGithubRepos = () => {
    return axios.get(GITHUB_ENDPOINT).then(response => response.data);
};