import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import NavBarUser from './NavBarUser';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: false
    }
  }

  componentDidMount() {
    // console.log(this.props.user.session)
    this.setState({
      currentUser: this.props.session
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Weather to Wear</h1>
          { this.state.currentUser ? <NavBarUser /> : <NavBar /> }
        </header>
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
