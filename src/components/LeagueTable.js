import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-bootstrap';
import '../assets/scss/LeagueTable.scss';

export default function LeagueTable(props) {
    return (
        <div className="container league-table-main">
            <h3>LeagueTable</h3>
        </div>
    )
}

LeagueTable.PropTypes = {
    league: PropTypes.object
}