-- 26/05/20: I used the same method as Sports Scoring App v2 where the user would run this file to create the database with two tables. In development I created the db and tables manually in pgAdmin 4. I'll look at this again once the MVP functionality is complete.
DROP TABLE fixtures;
DROP TABLE teams;

CREATE TABLE teams
(
  team_id SERIAL8 primary key,
  name VARCHAR(255) not null
);

CREATE TABLE fixtures
(
  fixture_id SERIAL8 primary key,
  team_a_id INT8 REFERENCES teams(team_id),
  team_b_id INT8 REFERENCES teams(team_id),
  winning_team_id INT8 REFERENCES teams(team_id),
  losing_team_id INT8 REFERENCES teams(team_id)
);
