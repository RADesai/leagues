import { FETCH_LEAGUE, UPDATE_LEAGUE } from '../constants';
import fetchLeague from '../services.js';

const actions = {
    fetchLeague: (leagueName) => ({
        type: FETCH_LEAGUE,
        payload: fetchLeague(leagueName)
    }),
    updateLeague: (league) => ({
        type: UPDATE_LEAGUE,
        payload: league
    })
};

export default actions;