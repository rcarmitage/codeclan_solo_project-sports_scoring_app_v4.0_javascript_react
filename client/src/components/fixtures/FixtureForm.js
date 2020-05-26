// 26/05/20: STATUS - Partially functional. User can enter fixture_id to add and edit Fixtures. The next step is to implement a dropdown list of the teams available and an option to select one of the teams as a winner.
// 26/05/20: TODO - Dropdown with team names taken from teams table in db, rather than text input.
// 26/05/20: TODO - Selector for winning team. My current thought is to have team_a highlighted as the winner by default and the user can click a button under team_b to change the winner to them, and a button under team_a to change it back. The selection will populate the winning_team_id and losing_team_id in the POST request.
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
