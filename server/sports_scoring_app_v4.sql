DROP TABLE fixtures;
DROP TABLE teams;

CREATE TABLE teams (
  team_id SERIAL8 primary key,
  name VARCHAR(255) not null
);

CREATE TABLE fixtures (
  fixture_id SERIAL8 primary key,
  team_a_id INT8 REFERENCES teams(team_id),
  team_b_id INT8 REFERENCES teams(team_id),
  winning_team_id INT8 REFERENCES teams(team_id),
  losing_team_id INT8 REFERENCES teams(team_id)
);