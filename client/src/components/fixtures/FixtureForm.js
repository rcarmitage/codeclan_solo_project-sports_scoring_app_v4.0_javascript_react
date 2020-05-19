import React, { Fragment, useState, useContext, useEffect } from 'react';
import LeagueContext from '../../context/league/leagueContext';

const FixtureForm = () => {
  const leagueContext = useContext(LeagueContext);

  const {
    addFixture,
    editFixture,
    currentFixture,
    clearCurrentFixture,
  } = leagueContext;

  useEffect(() => {
    if (currentFixture !== null) {
      setFixture(currentFixture);
    } else {
      setFixture({ team_a: '', team_b: '', winning_team: '', losing_team: '' });
    }
  }, [leagueContext, currentFixture]);

  const [fixture, setFixture] = useState({
    team_a: '',
    team_b: '',
    winning_team: '',
    losing_team: '',
  });

  const { team_a, team_b, winning_team, losing_team } = team;

  // Needs more done to make it work
  const onChange = (event) =>
    setTeam({ ...fixture, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (currentFixture === null) {
      addFixture(fixture);
    } else {
      editFixture(fixture);
    }
    setFixture({ team_a: '', team_b: '', winning_team: '', losing_team: '' });
  };

  const clearAll = () => {
    clearCurrentFixture();
  };

  return (
    <Fragment>
      <div>
        <h4>{currentTeam ? 'Edit Fixture' : 'Add Fixture'}</h4>
      </div>
      <div className='fixture-form'>
        <form onSubmit={onSubmit}>
          <label>Team A: </label>
          <input
            type='text'
            name='team_a'
            value={team_a}
            onChange={onChange}
            required
          />
          <label>Team B: </label>
          <input
            type='text'
            name='team_b'
            value={team_b}
            onChange={onChange}
            required
          />
          <label>Winning Team: </label>
          <input
            type='text'
            name='winning_team'
            value={winning_team}
            onChange={onChange}
            required
          />
          <label>Losing Team: </label>
          <input
            type='text'
            name='losing_team'
            value={losing_team}
            onChange={onChange}
            required
          />
          <input
            type='submit'
            value={currentTeam ? 'Update Fixture' : 'Add Fixture'}
          />
        </form>
      </div>
      {currentFixture && (
        <div>
          <button onClick={clearAll}>Clear</button>
        </div>
      )}
    </Fragment>
  );
};

export default TeamForm;
