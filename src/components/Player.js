import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/Player.scss';

export default function Player(props) {
    const { player } = props;

    return player ?
        <div key={player.id.toString()}>{ player.name }</div>
        : <div/>
}

Player.PropTypes = {
    player: PropTypes.object
}