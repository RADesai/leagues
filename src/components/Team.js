import React from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';
import '../assets/scss/Team.scss';

export default function Team(props) {
    const { team, players } = props;

    return team && players ?
        <div className="row">
            <div className="mx-auto text-center team col-xs-10 col-md-10">
                <div className="row team-name">
                    <div className="col-md-12">
                        <div>{ team.teamName }</div>
                    </div>
                </div>
                <div className="row team-info text-left">
                    <div className="col-sm-2 col-md-3">
                        <img className="team-logo" src={ team.logo } />
                    </div>
                    <div className="team-roster col-sm-10 col-md-9">
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