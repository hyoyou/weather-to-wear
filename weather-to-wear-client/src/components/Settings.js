import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '',
        name: '',
        cities: [],
        userCities: [],
        coldSensitivity: '',
        optsHandsFree: ''
      },
      zipcode: '',
      cities: [{ zipcode: '' }]
    }
  }

  componentWillReceiveProps(nextProps) {
    let user = nextProps.user

    this.setState({
      user: {
        id: user.id,
        name: user.name,
        cities: user.cities,
        userCities: user.userCities,
        coldSensitivity: user.coldSensitivity,
        optsHandsFree: user.optsHandsFree
      }
    })
  }

  handleZipCodeInput = (id, event) => {
    const newCities = this.state.cities.map((city, cid) => {
      if (id !== cid) return city;
      return { ...city, zipcode: event.target.value };
    })

    this.setState({ cities: newCities })
  }

  handleAddCity = event => {
    this.setState({
      cities: this.state.cities.concat([{ zipcode: '' }])
    })
  }

  handleRemoveCity = (id) => {
    this.setState({
      cities: this.state.cities.filter((city, cid) => id !== cid)
    })
  }

  onToggle = event => {
    console.log(event.target.name)
  }

  onSave = event => {

  }

  onCancel = event => {

  }


  render() {
    return(
      <div>
        <h2>{this.props.user.name}'s Settings</h2>
        <p>{this.state.id}</p>
        <form>
          <fieldset>
            <legend>Cities</legend>
            {this.state.cities.map((city, id) => (
              <div className="city" key={id}>
                <input
                  type="text"
                  name="zipcode"
                  placeholder={`City #${id + 1} Zip Code`}
                  value={city.zipcode}
                  onChange={(event) => this.handleZipCodeInput(city.id, event)}
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
              name="jacket"

              onChange={(event) => this.onToggle(event)} />
            <label htmlFor="jacket">I cannot stand the cold!</label>
            <br />
            <input
              type="checkbox"
              name="umbrella"
              value={this.props.user.optsHandsFree}
              onChange={(event) => this.onToggle(event)} />
            <label htmlFor="umbrella">I do not like to carry things!</label>

          </fieldset>
          <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
          <button type="submit" className="btn btn-warning" onClick={this.onCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default Settings;

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
