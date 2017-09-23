import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/leagueActions';
import LeagueTable from '../components/LeagueTable';
import '../assets/scss/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setLeague();
    }

    setLeague() {
        this.props.actions.fetchLeague();
    }

    render() {
        return (
            <div className="league-main">
                <h1 className="league-main-title">Leagues</h1>
                <hr />
                <LeagueTable { ...this.props }/>
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    league: PropTypes.object
};

function mapStateToProps(state) {
    const { league } = state.leagueReducer;
    return { league };
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);