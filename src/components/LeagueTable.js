import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-bootstrap';
import '../assets/scss/LeagueTable.scss';

export default function LeagueTable(props) {
    return (
        <div className="container">
            <Grid className="league-table-main">
                <Row>
                    <Col xs={6}>
                        <h3>LeagueTable</h3>
                    </Col>
                    <Col xs={6}>
                        <h3>LeagueTable-2</h3>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

LeagueTable.PropTypes = {
    league: PropTypes.object
}