import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        { zipcode: '' }
      ]
    }
  }

  onSave = event => {

  }

  onCancel = event => {

  }

  render() {
    return(
      <div>
        <h2>My Settings</h2>
        <form>
          <fieldset>
            <legend>Cities</legend>

            <label>Add City: </label>
            <input
              type="text"
              name="zipcode"

              onChange={(event) => this.onInput(event)} />

          </fieldset>
          <fieldset>
            <legend>Preferences</legend>
            <input
              type="checkbox"
              name="jacket"

              onChange={(event) => this.onInput(event)} />
            <label for="jacket">I cannot stand the cold!</label>
            <br />
            <input
              type="checkbox"
              name="umbrella"

              onChange={(event) => this.onInput(event)} />
            <label for="umbrella">I do not like to carry things!</label>

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
