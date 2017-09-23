import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/LeagueTable.scss';

export default function LeagueTable(props) {
    const { league } = props;

    const getTeams = ({ teams, players }) => {
        return teams.map((team) =>
            <div className="card" key={team.id}>
                <h3 className="card-header">{ team.name }</h3>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">{ team.record }</h6>
                    <div className="card-text">
                        { getPlayers(players, team.id) }
                    </div>
                </div>
            </div>
        );
    };

    const getPlayers = (players, teamId) => {
        return players.filter((player) => player.teamId === teamId).map((player) =>
            <div key={player.id}>{ player.name }</div>
        );
    };

    return league && league.teams ?
        <div className="container table">
            <h1 className="table-header">{ league.name }</h1>
            <div className="tabe-body" >
                { getTeams(league) }
            </div>
        </div>
        :
        <div />
}

LeagueTable.PropTypes = {
    league: PropTypes.object
}