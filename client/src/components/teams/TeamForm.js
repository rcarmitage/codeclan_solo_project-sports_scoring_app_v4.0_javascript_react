import React, { Fragment, useState, useContext, useEffect } from 'react';
import LeagueContext from '../../context/league/leagueContext';

const TeamForm = () => {
  const leagueContext = useContext(LeagueContext);

  const { addTeam, editTeam, currentTeam, clearCurrentTeam } = leagueContext;

  useEffect(() => {
    if (currentTeam !== null) {
      setTeam(currentTeam);
    } else {
      setTeam({ name: '' });
    }
  }, [leagueContext, currentTeam]);

  const [team, setTeam] = useState({ name: '' });

  const { name } = team;

  const onChange = (event) =>
    setTeam({ ...team, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (currentTeam === null) {
      addTeam(team);
    } else {
      editTeam(team);
    }
    setTeam({ name: '' });
  };

  const clearAll = () => {
    clearCurrentTeam();
  };

  // const { dispatch } = leagueContext;

  // const initialFormState = { name: '' };
  // const [team, setTeam] = useState(initialFormState);

  // const [name, setName] = useState('');

  // const { name } = team;

  // const onChange = (event) =>
  //   setTeam({ ...team, [event.target.name]: event.target.value });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch({ type: 'ADD-TEAM', team: { name } });
  //   setName('');
  // };

  return (
    <Fragment>
      <div>
        <h4>{currentTeam ? 'Edit Team' : 'Add Team'}</h4>
      </div>
      <div className='add-team-form'>
        <form onSubmit={onSubmit}>
          <label>Team Name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
          <input
            type='submit'
            value={currentTeam ? 'Update Team' : 'Add Team'}
          />
        </form>
      </div>
      {currentTeam && (
        <div>
          <button onClick={clearAll}>Clear</button>
        </div>
      )}
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

export default TeamForm;
