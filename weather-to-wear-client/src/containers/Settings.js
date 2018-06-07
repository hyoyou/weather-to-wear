import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import * as sessionActions from '../actions/sessionActions';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        name: '',
        cities: [],
        coldSensitivity: '',
        optsHandsFree: ''
      }
    }
  }

  componentDidMount() {
    this.setState({
      user: {
        id: this.props.user.id,
        name: this.props.user.name,
        cities: this.props.user.user_cities,
        coldSensitivity: this.props.user.cold_sensitivity,
        optsHandsFree: this.props.user.opts_hands_free
      }
    })
  }

  handleZipCodeInput = (id, event) => {
    const updatedCities = this.state.user.cities.map((city, cityId) => {
      // debugger
      if (id !== cityId) return city;
      return { ...city, city_attributes: {zip_code: event.target.value } };
    })

    this.setState({
      user: { ...this.state.user,
        cities: updatedCities
      }
    })
  }

  handleAddCity = event => {
    this.setState({
      user: { ...this.state.user,
        cities: this.state.user.cities.concat([{ city_attributes: {zip_code: '' }}])
      }
    })
  }

  handleRemoveCity = (id) => {
    this.setState({
      user: { ...this.state.user,
        cities: this.state.user.cities.filter((city, cid) => id !== cid)
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

  onSave = async event => {
    event.preventDefault();

    this.props.actions.updateUser(this.state.user);
    this.props.history.push('/forecast');
  }

  onCancel = event => {
    event.preventDefault();

    this.props.history.push('/forecast');
  }


  render() {
    return(
      <div>
        <h2>{this.props.user.name}'s Settings</h2>
        <form>
          <fieldset>
            <legend>Cities</legend>
            {this.state.user.cities.map((city, id) => (
              <div className="city" key={id}>
                <input
                  type="text"
                  name="zipcode"
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
              name="coldSensitivity"
              value={this.state.user.coldSensitivity}
              checked={this.state.user.coldSensitivity}
              onChange={(event) => this.onToggle(event)} />
            <label htmlFor="jacket">I cannot stand the cold!</label>
            <br />
            <input
              type="checkbox"
              name="optsHandsFree"
              value={this.state.user.optsHandsFree}
              checked={this.state.user.optsHandsFree}
              onChange={(event) => this.onToggle(event)} />
            <label htmlFor="umbrella">I do not like to carry things!</label>
            <br />
          </fieldset>

          <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }} onClick={this.onSave}>Save</button>
          <button type="submit" className="btn btn-warning" style={{ marginLeft: '10px' }} onClick={this.onCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Settings));
