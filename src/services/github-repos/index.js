import {GITHUB_ENDPOINT} from './endpoints';
import axios from '../../config/axios';

export const getGithubRepos = (params) => {
    return axios.get(GITHUB_ENDPOINT, {
        params: {
            sort: 'stars',
            order: 'desc', ...params
        }
    }).then(response => response.data);
};
