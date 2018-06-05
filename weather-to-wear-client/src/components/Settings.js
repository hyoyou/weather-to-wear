import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingsActions from '../actions/settingsActions';

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

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user

    this.setState({
      user: {
        id: user.id,
        name: user.name,
        cities: user.cities,
        coldSensitivity: user.coldSensitivity,
        optsHandsFree: user.optsHandsFree
      }
    })
  }

  handleZipCodeInput = (id, event) => {
    const updatedCities = this.state.user.cities.map((city, cityId) => {
      if (id !== cityId) return city;
      console.log(event.target.value)
      return { ...city, zip_code: event.target.value };
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
        cities: this.state.user.cities.concat([{ zip_code: '' }])
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

  onSave = event => {
    event.preventDefault();

    this.props.actions.updateUser(this.state.user);
  }

  onCancel = event => {

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
                  value={city.zip_code}
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
            <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
            <button type="submit" className="btn btn-warning" onClick={this.onCancel}>Cancel</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(settingsActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Settings);

/*
My Cities:
Seattle, WA       Delete
New York, NY      Delete

Add city:
ZipCode [     ]

checkbox or toggle/ I can't stand the cold!
value={this.state.coldSensitivity}
checkbox or toggle/ I don't like to carry much!
value={this.state.optsHandsFree}

Save    Cancel
*/
