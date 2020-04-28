import React, { Component } from 'react';

class AddTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    // this.state = {
    //   name: "",
    //   played: 0,
    //   won: 0,
    //   lost: 0,
    //   points: 0
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A team was submitted: ' + this.state.value);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  
  render() {
    return (
      <form className="add-team-form" onSubmit={this.handleSubmit}>
        <label>
          Team:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddTeamForm;