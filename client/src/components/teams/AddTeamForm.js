import React, { Component } from 'react';

class AddTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      played: 0,
      won: 0,
      lost: 0,
      points: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePlayedChange = this.handlePlayedChange.bind(this);
    this.handleWonChange = this.handleWonChange.bind(this);
    this.handleLostChange = this.handleLostChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name.trim();
    const played = this.state.played.trim();
    const won = this.state.won.trim();
    const lost = this.state.lost.trim();
    const points = this.state.points.trim();
    this.props.onTeamSubmit({
      name: name,
      played: played,
      won: won,
      lost: lost,
      points: points
    });
    this.setState({name: '', played: '', won: '', lost: '', points: ''});
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handlePlayedChange(event) {
    this.setState({
      played: event.target.value
    })
  }

  handleWonChange(event) {
    this.setState({
      won: event.target.value
    })
  }

  handleLostChange(event) {
    this.setState({
      lost: event.target.value
    })
  }

  handlePointsChange(event) {
    this.setState({
      points: event.target.value
    })
  }
  
  render() {
    return (
      <form className="add-team-form" onSubmit={this.handleSubmit}>
        <label>
          Team:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Played: 
          <input type="number" value={this.state.played} onChange={this.handlePlayedChange} />
        </label>
        <label>
          Won:
          <input type="number" value={this.state.won} onChange={this.handleWonChange} />
        </label>
        <label>
          Lost:
          <input type="number" value={this.state.lost} onChange={this.handleLostChange} />
        </label>
        <label>
          Points:
          <input type="number" value={this.state.points} onChange={this.handlePointsChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddTeamForm;