import React, { useState, useEffect, useContext } from 'react';
import LeagueContext from '../../context/league/leagueContext';

const EditTeamForm = (props) => {
  const leagueContext = useContext(LeagueContext);
  const { currentTeam, setCurrentTeam } = leagueContext;

  const [team, setTeam] = useState(props.currentTeam);

  useEffect(() => {
    setTeam(props.currentTeam);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTeam({ ...team, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTeam(team.id, team);
      }}
    >
      {/* <label>Name: </label>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleInputChange}
      /> */}
      <button>Update Team</button>
    </form>
  );
};

export default EditTeamForm;
