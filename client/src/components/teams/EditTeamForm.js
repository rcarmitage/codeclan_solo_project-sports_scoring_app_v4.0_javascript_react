import React, { Component } from 'react';

class EditTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.team.name,
      played: this.props.team.played,
      won: this.props.team.won,
      lost: this.props.team.lost,
      points: this.props.team.points
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePlayedChange = this.handlePlayedChange.bind(this);
    this.handleWonChange = this.handleWonChange.bind(this);
    this.handleLostChange = this.handleLostChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = this.props.team.id;
    const name = this.state.name.trim();
    const played = this.state.played.trim();
    const won = this.state.won.trim();
    const lost = this.state.lost.trim();
    const points = this.state.points.trim();
    this.props.onTeamEdit({
      id: id,
      name: name,
      played: played,
      won: won,
      lost: lost,
      points: points
    })
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
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
      </label>
      <label>
        Played: 
        {/* <input type="number" value={this.state.played} onChange={this.handlePlayedChange} /> */}
      </label>
      <label>
        Won:
        {/* <input type="number" value={this.state.won} onChange={this.handleWonChange} /> */}
      </label>
      <label>
        Lost:
        {/* <input type="number" value={this.state.lost} onChange={this.handleLostChange} /> */}
      </label>
      <label>
        Points:
        {/* <input type="number" value={this.state.points} onChange={this.handlePointsChange} /> */}
      </label>
      <button type="submit" value="Post">Update Team</button>
      </form>
    )
  }
}

export default EditTeamForm;