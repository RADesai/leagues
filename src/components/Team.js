import React from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';
import '../assets/scss/Team.scss';

export default function Team(props) {
    const { team, players } = props;

    return team && players ?
        <div className="row">
            <div className="col-xs-1 col-md-2"></div>
            <div className="team col-xs-10 col-md-8">
                <div className="row">
                    <div className="team-info col-xs-4 col-md-3">
                        <div className="team-name">{ team.name }</div>
                        <div className="team-record text-muted">{ team.record }</div>
                    </div>
                    <div className="team-roster col-xs-8 col-md-9">
                        { players.map((player) =>
                            <Player
                                key={ player.id.toString() }
                                player={ player }
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
        : <div/>
}

Team.PropTypes = {
    team: PropTypes.object,
    players: PropTypes.array
}