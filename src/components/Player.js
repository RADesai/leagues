import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/Player.scss';

export default function Player(props) {
    const { player } = props;

    return player ?
        <div className="row player">
            <div className="col-sm-2 player-info">
                <div className="player-position">{ player.position }</div>
                { player.name }
            </div>
        </div>
        : <div/>
}

Player.PropTypes = {
    player: PropTypes.object
}