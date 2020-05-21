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
      setFixture({
        team_a_id: '',
        team_b_id: '',
        winning_team_id: '',
        losing_team_id: '',
      });
    }
  }, [leagueContext, currentFixture]);

  const [fixture, setFixture] = useState({
    team_a_id: '',
    team_b_id: '',
    winning_team_id: '',
    losing_team_id: '',
  });

  const { team_a_id, team_b_id, winning_team_id, losing_team_id } = fixture;

  // Needs more done to make it work
  const onChange = (event) =>
    setFixture({ ...fixture, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    if (currentFixture === null) {
      addFixture(fixture);
    } else {
      editFixture(fixture);
    }
    setFixture({
      team_a_id: '',
      team_b_id: '',
      winning_team_id: '',
      losing_team_id: '',
    });
  };

  const clearAll = () => {
    clearCurrentFixture();
  };

  return (
    <Fragment>
      <div>
        <h4>{currentFixture ? 'Edit Fixture' : 'Add Fixture'}</h4>
      </div>
      <div className='fixture-form'>
        <form onSubmit={onSubmit}>
          <label>Team A: </label>
          <input
            type='text'
            name='team_a_id'
            value={team_a_id}
            onChange={onChange}
            required
          />
          <label>Team B: </label>
          <input
            type='text'
            name='team_b_id'
            value={team_b_id}
            onChange={onChange}
            required
          />
          <label>Winning Team: </label>
          <input
            type='text'
            name='winning_team_id'
            value={winning_team_id}
            onChange={onChange}
            required
          />
          <label>Losing Team: </label>
          <input
            type='text'
            name='losing_team_id'
            value={losing_team_id}
            onChange={onChange}
            required
          />
          <input
            type='submit'
            value={currentFixture ? 'Update Fixture' : 'Add Fixture'}
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

export default FixtureForm;
