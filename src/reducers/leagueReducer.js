import { UPDATE_LEAGUE, FETCH_LEAGUE } from '../constants';

const defaultState = {
    name: "League Name",
    teams: [
        {
            id: 0,
            name: "Team 0"
        }, {
            id: 1,
            name: "Team 1"
        }, {
            id: 2,
            name: "Team 2"
        }
    ]
}

export default function leagueReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_LEAGUE:
            return {
                ...state,
               name: action.payload
            };
        case FETCH_LEAGUE:
        return {
            ...state,
            name: action.payload.name,
            teams: action.payload.teams
        }
        default:
            return state;
    }
}