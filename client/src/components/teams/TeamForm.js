// 26/05/20: FILE STATUS - Functional for MVP. Would like to have a message
// 26/05/20: TODO - [After completing MVP] Message to display after submitting new Team - suggest adding a Fixture for the new Team with a link to Add Fixture, another link to go back to Teams page.
// 26/05/20: TODO - [After completing MVP] Message to display after submitting to edit Team - "go here to add a Fixture for your Team" + "go back to Teams".

import React, { Fragment, useState, useContext, useEffect } from 'react';
import LeagueContext from '../../context/league/leagueContext';

// 26/05/20: STATUS - Functional.
const TeamForm = () => {
  const leagueContext = useContext(LeagueContext);

  // 26/05/20: STATUS - Functional.
  const { addTeam, editTeam, currentTeam, clearCurrentTeam } = leagueContext;

  // 26/05/20: STATUS - Functional.
  useEffect(() => {
    if (currentTeam !== null) {
      setTeam(currentTeam);
    } else {
      setTeam({ name: '' });
    }
  }, [leagueContext, currentTeam]);

  // 26/05/20: STATUS - Functional.
  const [team, setTeam] = useState({ name: '' });

  // 26/05/20: STATUS - Functional.
  const { name } = team;

  // 26/05/20: STATUS - Functional.
  const onChange = (event) =>
    setTeam({ ...team, [event.target.name]: event.target.value });

  // 26/05/20: STATUS - Functional. Adds (POST) if there is not a currentTeam, edits (PUT) if there is a currentTeam.
  const onSubmit = (event) => {
    event.preventDefault();
    if (currentTeam === null) {
      addTeam(team);
    } else {
      editTeam(team);
    }
    setTeam({ name: '' });
  };

  // 26/05/20: STATUS - Functional.
  const clearAll = () => {
    clearCurrentTeam();
  };

  // 26/05/20: STATUS - Functional for MVP.
  // 26/05/20: TODO - [After completing MVP] Messages for 'Add Fixture' and 'Go to Teams' after submitting.
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
      {/* <div>
        <p>
          (Think about how to suggest adding Fixtures for the new Team: possibly
          an alert that comes up saying "Team added" with a link "Now add some
          fixtures: Add Fixture button", and another button for "Take me back to
          Teams")
        </p>
      </div> */}
      {/* <div className='link-to-fixtures'>
        <p>Now add some Fixtures for the new team!</p>
        <button>Add Fixture (to be constructed)</button>
      </div> */}
    </Fragment>
  );
};

export default TeamForm;
