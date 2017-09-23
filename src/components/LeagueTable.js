import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';
import '../assets/scss/LeagueTable.scss';

export default function LeagueTable(props) {
    const { league } = props;

    return league && league.teams ?
        <div className="container league-table">
            <div className="league-table-header text-center">
                    { league.name }
                    <hr />
            </div>
            <div className="league-table-body" >
                { league.teams.map((team) =>
                    <Team
                        key={ team.id }
                        team={ team }
                        players={ league.players.filter((player) => player.teamId === team.id) }
                    />
                )}
            </div>
        </div>
        :
        <div />
}

LeagueTable.PropTypes = {
    league: PropTypes.object
}