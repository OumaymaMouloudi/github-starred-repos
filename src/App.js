import React, {useEffect} from 'react';
import moment from "moment";
import {connect} from 'react-redux';
import {get} from 'lodash';
import {getLatestRepos} from './redux/actions';
import {RepoCard} from "./components/RepoCard";
import './App.css';

function App({repos, ...props}) {

    useEffect(()=>{
        props.getLatestRepos({
            q: `created:>${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
            , page: 1
        });
    },[]);

    return (
        <div className="App">
            {repos.map((repo, index) =>
                <RepoCard
                    ownerName={repo.owner.login}
                    repoName={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    issues={repo.open_issues}
                    avatarUrl={repo.owner.avatar_url}
                    creationDate={repo.created_at}
                    key={index}
                />
            )}
        </div>
    );
}

const mapStateToProps = ({Repos}) => ({
    repos: get(Repos, 'list', [])
});

export default connect(
    mapStateToProps,
    {
        getLatestRepos
    }
)(App);
