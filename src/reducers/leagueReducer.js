import { UPDATE_LEAGUE, FETCH_LEAGUE } from '../constants';

const defaultState = {};

export default function leagueReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_LEAGUE:
            return {
                ...state,
                league: action.payload
            }
        case UPDATE_LEAGUE:
            return {
                ...state,
               name: action.payload
            };
        default:
            return state;
    }
}