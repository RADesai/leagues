import React from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';
import '../assets/scss/Team.scss';

export default function Team(props) {
    const { team, players } = props;

    return team && players ?
        <div className="row team">
            <div className="team-info col-sm-4">
                <h3 className="team-name">{ team.name }</h3>
                <h6 className="team-record text-muted">{ team.record }</h6>
            </div>
            <div className="col-sm-8">
                { players
                    .map((player) => <Player
                                        key={ player.id.toString() }
                                        player={ player }
                                    />
                    )
                }
            </div>
        </div>
        : <div/>
}

Team.PropTypes = {
    team: PropTypes.object,
    players: PropTypes.array
}