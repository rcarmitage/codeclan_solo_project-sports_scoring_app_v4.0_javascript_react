import React, { Component } from 'react';

class AddTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    // this.state = {
    //   name: "",
    //   played: 0,
    //   won: 0,
    //   lost: 0,
    //   points: 0
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A team was submitted: ' + this.state.value);
    event.preventDefault;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Team:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}