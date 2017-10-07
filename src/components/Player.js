import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/Player.scss';

export default function Player(props) {
    const { player } = props;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return player ?
        <div className="row player">
            <div className="col-sm-6 player-info">
                <div className="player-position">{ player.position }</div>
                { player.name }
            </div>
            <div className="col-sm-6 player-info">
                <div className="player-salary">{ formatter.format(player.salary) }</div>
            </div>
        </div>
        : <div/>
}

Player.PropTypes = {
    player: PropTypes.object
}