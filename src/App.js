import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {getLatestRepos} from './redux/actions';
import {RepoCard} from './components/RepoCard';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App({repos, count, ...props}) {

    const [page, setPage] = useState(1);

    useEffect(()=>{
        props.getLatestRepos(
            {
                q: `created:>${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
                , page: page
            },
            ()=>{
                setPage(page+1);
            }
        );
    },[]);

    const fetchData = ()=>{
        props.getLatestRepos(
            {
                q: `created:>${moment().subtract(30, 'days').format('YYYY-MM-DD')}`
                , page: page
            },
            ()=>{
                setPage(page+1);
            }
        );

    };

    return (
        <div className="App">
            <InfiniteScroll
                dataLength={count}
                next={fetchData}
                hasMore={repos.length>=0?repos.length <= count:false }
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

            >
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
            </InfiniteScroll>

        </div>
    );
}

const mapStateToProps = ({Repos}) => ({
    repos: get(Repos, 'list', []),
    count: get(Repos, 'count', 0),
    hasMore: get(Repos, 'hasMore', true),
});

export default connect(
    mapStateToProps,
    {
        getLatestRepos
    }
)(App);
