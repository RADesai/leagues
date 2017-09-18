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
    const { location: { query } } = props;
    this.queryParams = query;
  }

  componentDidMount() {
    const name = "Holy Trinity";
      this.setLeague(name);
  }

  setLeague(name) {
    this.props.actions.fetchLeague(name);
  }

  render() {
    return (
      <div className="league-main">
        <h1 className="league-main-title">Leagues</h1>
        <LeagueTable league={ this.props.league } />
      </div>
    )
  }
}

App.PropTypes = {
  actions: PropTypes.object,
  league: PropTypes.object
};

function mapStateToProps(state) {
  const { name, teams } = state.leagueReducer;
  const league = {
    name: name,
    teams: teams
  }
  return { league };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);