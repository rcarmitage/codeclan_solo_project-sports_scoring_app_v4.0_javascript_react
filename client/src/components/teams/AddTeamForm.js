import React, { Fragment, useState, useContext } from 'react';
import LeagueContext from '../../context/league/leagueContext';

const AddTeamForm = () => {
  const leagueContext = useContext(LeagueContext);

  const { dispatch } = leagueContext;

  // const initialFormState = { name: '' };
  // const [team, setTeam] = useState(initialFormState);

  const [name, setName] = useState('');

  // const { name } = team;

  // const onChange = (event) =>
  //   setTeam({ ...team, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD-TEAM', team: { name } });
    setName('');
  };

  return (
    <Fragment>
      <div className='add-team-form'>
        <form onSubmit={handleSubmit}>
          <label>Team Name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <button>Add Team</button>
        </form>
      </div>
      <div>
        <p>
          (Think about how to suggest adding Fixtures for the new Team: possibly
          an alert that comes up saying "Team added" with a link "Now add some
          fixtures: Add Fixture button", and another button for "Take me back to
          Teams")
        </p>
      </div>
      {/* <div className='link-to-fixtures'>
        <p>Now add some Fixtures for the new team!</p>
        <button>Add Fixture (to be constructed)</button>
      </div> */}
    </Fragment>
  );
};

export default AddTeamForm;
