import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import * as sessionActions from '../actions/sessionActions';

const isLoggedIn = localStorage.getItem('Token') ? true : false;

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { user: this.props.user }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user })
  }

  handleZipCodeInput = (id, event) => {
    const updatedCities = this.state.user.user_cities_attributes.map((city, cityId) => {
      // debugger
      if (id !== cityId) return city;
      return { ...city, city_attributes: {zip_code: event.target.value } };
    })

    this.setState({
      user: { ...this.state.user,
        user_cities_attributes: updatedCities
      }
    })
  }

  handleAddCity = event => {
    this.setState({
      user: { ...this.state.user,
        user_cities_attributes: this.state.user.user_cities_attributes.concat([{ city_attributes: {zip_code: '' }}])
      }
    })
  }

  handleRemoveCity = (id) => {
    const { user } = this.state;

    user.user_cities_attributes.filter((city, cid) => {
      if (id === cid) {
        if (city.id) {
          this.props.actions.deleteUserCity(city.id);
        }
      }
    })

    this.setState({
      user: { ...user,
        user_cities_attributes: user.user_cities_attributes.filter((city, cid) => id !== cid)
      }
    })
  }

  onToggle = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      user: { ...this.state.user,
        [name] : value
      }
    })
  }

  onSave = event => {
    event.preventDefault();

    this.props.actions.updateUser(this.state.user);
    this.props.history.push('/forecast');
  }

  onCancel = event => {
    event.preventDefault();

    this.props.history.push('/forecast');
  }

  render() {
    const { user } = this.state;

    if (isLoggedIn) {
      return (
        <div>
          <h2>{user.name}'s Settings</h2>
          <form>
            <fieldset>
              <legend>Cities</legend>
                {this.state.user.user_cities_attributes &&
                this.state.user.user_cities_attributes.map((city, id) => (
                <div className="city" key={id}>
                  <input
                    type="text"
                    name="zipcode"
                    readOnly={city.id ? "readOnly" : ""}
                    placeholder={`City #${id + 1} Zip Code`}
                    value={city.city_attributes.zip_code}
                    onChange={(event) => this.handleZipCodeInput(id, event)}
                  />
                  <button type="button" onClick={(event) => this.handleRemoveCity(id)}>Remove City</button>
                </div>
              ))}
              <button type="button" onClick={this.handleAddCity}>Add City</button>
            </fieldset>

            <fieldset>
              <legend>Preferences</legend>
              <input
                type="checkbox"
                name="cold_sensitivity"
                value={user.cold_sensitivity}
                checked={user.cold_sensitivity}
                onChange={(event) => this.onToggle(event)} />
              <label htmlFor="jacket">I cannot stand the cold!</label>
              <p>If checked, jacket will be recommended below 60&#8457; (Default recommendation is below 55&#8457;)</p>
              <br />
              <input
                type="checkbox"
                name="opts_hands_free"
                value={user.opts_hands_free}
                checked={user.opts_hands_free}
                onChange={(event) => this.onToggle(event)} />
              <label htmlFor="umbrella">I do not like to carry things!</label>
              <p>If checked, umbrella will be recommended above 55% chance of rain (Default recommendation is above 50%)</p>
              <br />
            </fieldset>

            <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.onSave}>Save</button>
            <button type="submit" className="btn btn-warning" style={{ marginLeft: '10px' }} onClick={this.onCancel}>Cancel</button>
          </form>
        </div>
      )
    } else {
      return (
        <h1>Please Log In to Access Settings</h1>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Settings));
