import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getLatestRepos} from './redux/actions';
import {Card, Col, Row} from 'reactstrap';
import {t} from "./i18n";
import moment from "moment";

function App(props) {

    useEffect(()=>{
        props.getLatestRepos();
        console.log('test');
    },[]);

    console.log(props.repos);

    return (
        <div className="App">


            {props.repos.map((r, index)=>{
                console.log(r);
                return (
                    <Card key={index} className='border border-secondary p-4 my-2'>
                        <Row>
                            <Col lg={3} sm={4} xs={12}>
                                <img className='rounded mr-4' width={200} src={r.owner.avatar_url} alt=""/>
                            </Col>
                            <Col className='text-left' lg={9} sm={8} xs={12}>
                                <h2>{r.name}</h2>
                                <p>{r.description}</p>
                                <span className='border border-secondary p-2'>{t('stars') + ': ' + r.stargazers_count}</span>
                                <span className='border border-secondary p-2 ml-2'>{t('issues') + ': ' + r.open_issues_count}</span>
                                {console.log(moment().diff(r.created_at,'days'))}
                                <span className=' p-2 ml-2'>{t('submitted_by', {days:moment().diff(r.created_at,'days'), by:r.owner.login })}</span>
                            </Col>
                        </Row>
                    </Card>

                );
            })}

        </div>
    );
}

const mapStateToProps = state => ({
    repos: state.Repos.list,
});
export default connect(
    mapStateToProps,
    {
        getLatestRepos
    }
)(App);
