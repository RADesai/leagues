const fetchLeague = (leagueName) => {
    return {
        name: leagueName,
        teams: [
            {
                id: 0,
                name: "Team Mo"
            }, {
                id: 1,
                name: "Team J.C."
            }, {
                id: 2,
                name: "Team Heeb"
            }
        ]
    };
};

export default fetchLeague;