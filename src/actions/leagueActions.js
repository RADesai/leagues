import { FETCH_LEAGUE, UPDATE_LEAGUE } from '../constants';
import fetchLeague from '../services.js';

const actions = {
    fetchLeague: () => ({
        type: FETCH_LEAGUE,
        payload: fetchLeague()
    }),
    updateLeague: (newLeague) => ({
        type: UPDATE_LEAGUE,
        payload: newLeague
    })
};

export default actions;