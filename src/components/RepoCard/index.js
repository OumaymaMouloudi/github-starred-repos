import React from 'react';
import {Badge, Card, Col, Row} from 'reactstrap';
import moment from 'moment';

import {t} from '../../i18n';

export const RepoCard = ({avatarUrl, repoName, ownerName, description, stars, issues, creationDate}) => (
    <Card className='shadow bg-white p-4 my-4 border-0'>
        <Row>
            <Col lg={3} md={4} sm={12}>
                <img className='rounded mr-lg-4' width={200} src={avatarUrl} alt=''/>
            </Col>
            <Col className='text-left' lg={9} md={8} sm={12}>
                <h2>{repoName}</h2>
                <p>{description}</p>
                <Badge color="warning" className='p-2'>{t('stars', {stars})}</Badge>
                <Badge color="info" className='p-2 mx-2'>{t('issues', {issues})}</Badge>
                <div className='d-inline-block py-2 text-muted'>
                    {t('submitted_by', {
                        date: moment(creationDate).fromNow(),
                        by: ownerName
                    })}
                </div>
            </Col>
        </Row>
    </Card>
);
