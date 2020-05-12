import React, { useState } from 'react';

const AddTeamForm = props => {
  const initialFormState = {name: ""};
  const [team, setTeam] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setTeam({ ...team, [name]: value })
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!team.name) return
        
        props.addTeam(team)
        setTeam(initialFormState)
      }}
    >
      <label>Team Name: </label>
      <input type="text" name="name" value={team.name} onChange={handleInputChange} />
      <button>Add Team</button>
    </form>
  );
};

// class AddTeamForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 0,
//       name: "",
//       played: 0,
//       won: 0,
//       lost: 0,
//       points: 0,
//       slug: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleIdChange = this.handleIdChange.bind(this);
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handlePlayedChange = this.handlePlayedChange.bind(this);
//     this.handleWonChange = this.handleWonChange.bind(this);
//     this.handleLostChange = this.handleLostChange.bind(this);
//     this.handlePointsChange = this.handlePointsChange.bind(this);
//     this.handleSlugChange = this.handleSlugChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const id = this.state.id.toString();
//     const name = this.state.name.trim();
//     const played = this.state.played.toString();
//     const won = this.state.won.toString();
//     const lost = this.state.lost.toString();
//     const points = this.state.points.toString();
//     const slug = this.state.slug.trim();
//     this.props.onTeamSubmit({
//       id: id,
//       name: name,
//       played: played,
//       won: won,
//       lost: lost,
//       points: points,
//       slug: slug
//     });
//     this.setState({id: '', name: '', played: '', won: '', lost: '', points: '', slug: ''});
//   }

//   handleIdChange(event) {
//     this.setState({
//       id: event.target.value
//     })
//   }

//   handleNameChange(event) {
//     this.setState({
//       name: event.target.value
//     })
//   }

//   handlePlayedChange(event) {
//     this.setState({
//       played: event.target.value
//     })
//   }

//   handleWonChange(event) {
//     this.setState({
//       won: event.target.value
//     })
//   }

//   handleLostChange(event) {
//     this.setState({
//       lost: event.target.value
//     })
//   }

//   handlePointsChange(event) {
//     this.setState({
//       points: event.target.value
//     })
//   }

//   handleSlugChange(event) {
//     this.setState({
//       slug: event.target.value
//     })
//   }
  
//   render() {
//     return (
//       <form className="add-team-form" onSubmit={this.handleSubmit}>
//         <label>
//           ID (integer, choose higher than 6): 
//           <input type="number" value={this.state.id} onChange={this.handleIdChange} />
//         </label>
//         <label>
//           Team:
//           <input type="text" value={this.state.name} onChange={this.handleNameChange} />
//         </label>
//         <label>
//           Played: 
//           <input type="number" value={this.state.played} onChange={this.handlePlayedChange} />
//         </label>
//         <label>
//           Won:
//           <input type="number" value={this.state.won} onChange={this.handleWonChange} />
//         </label>
//         <label>
//           Lost:
//           <input type="number" value={this.state.lost} onChange={this.handleLostChange} />
//         </label>
//         <label>
//           Points:
//           <input type="number" value={this.state.points} onChange={this.handlePointsChange} />
//         </label>
//         <label>
//           Slug (team name + id, snake case):
//           <input type="text" value={this.state.slug} onChange={this.handleSlugChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default AddTeamForm;