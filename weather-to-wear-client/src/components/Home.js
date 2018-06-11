import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import NavBarUser from './NavBarUser';
import SearchBar from '../containers/SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          { this.props.session ? <NavBarUser /> : <NavBar /> }
        </header>
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session.session
  }
}

export default connect(mapStateToProps)(Home);
