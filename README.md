# Sports Scoring App v4

### An app for showing teams and fixtures in a league

This is version 4.

I created version 1 using Ruby and Sinatra as my first project during week 5 (August 2019) of the CodeClan Professional Software Development course.

Upon completion of the course I have recreated the app using different languages and frameworks in order to further understand implementation of functionality and design choices.

I have created version 4 with a React.js Front-End and a Node.js, Express.js and PostgreSQL Back-End. I began work on version 4 in April 2020.

Other versions:

- Version 1: [Sports Scoring App - Ruby & Sinatra (created on a Mac)](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v1.0_ruby_sinatra)
- Version 2: [Sports Scoring App - Ruby & Sinatra (created on Windows)](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v2.0_ruby_sinatra)
- Version 3: [Sports Scoring App - JavaScript & Vue](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v3.0_javascript_vue)

## Brief

### MVP:

A user should be able to…

- Create, edit and delete teams to the league
- Create, edit and delete fixtures
- There should be a way to display all the fixtures for a team and all the teams involved in a fixture
- The app should display if a fixture was won or lost

### Extensions:

- Create a league table to see who is on top of the league
- Self-selected extension: Add "Play a Game" functionality, i.e. the user would select two teams and the app would select a winner from these

## Running the App After Pulling from GitHub

### Installation

(Pending)

### Using the Sports Scoring App

(Pending)

## App Details

The following functionality is currently in progress. Further information and screenshot will be added once the app is fully functional:

- From Home you can select to view the Teams list, the Fixtures list, or the League Table. You can also navigate straight to the Add Team page.

- The Teams page lists all Teams in the League. You can edit or delete an individual Team, view the Team details, or add a Team to the League.

- The Fixtures page lists all the Fixtures between Teams in the League. You can edit the Teams in a Fixture and who the winning and losing Teams are, or delete a Fixture.

- The League Table page shows the Teams displayed by Points awarded.

Status of the app and plans for further development as of 26th May 2020:

- The framework of the Home, Teams, Fixtures and About pages is complete. The Teams data is displayed as per the design. The Fixtures data currently displays the database id number of the Teams in each Fixture, rather than the Team name. I play to access and render the Team names.
- The individual Team pages do not show any information other than the Team name. I plan to display all the Fixtures for that Team on this page, displaying whether they won or lost.
- The Add Team and Edit Team functionality is complete.
- The Delete Team functionality works for any Teams with no Fixtures, however there is an error when trying to delete a Team with at least one Fixture due to the foreign key reference. Firstly, I plan to produce an alert to the user if they try to delete a Team with a Fixture, explaining that they will need to delete the Fixtures first. Secondly, I plan to produce an alert that notifies the user that deleting a Team deletes all Fixtures they are assigned to, and a confirmation click from the user cascades the delete through all relevant Fixtures.
- The Add Fixture and Edit Fixture functionality works on a fundamental level, with the user being required to type in a database id number of a Team into a text field. I plan to produce a dropdown menu of the Teams in the League, which the user can select from to populate the Team A and Team B fields. I plan to have a button to select one of the teams as the Winner, with the other being recorded as the Loser.
- The Delete Fixture functionality is complete.
- The League Table is not complete. I have made design changes from version 2, where the Team entry had games played/won/lost and points which were used in rendering the League Table. In version 4 the Team entry only has a Team name, and all Fixture data is stored in the fixtures table. I plan to use the Fixtures data for each Team to produce the games played/won/lost and points, and sort this by points descending to create the League Table.
- CSS: I used the CSS from version 2 here, but have not fully implemented it. I plan to do this once app functionality is complete.
- I plan to upload and display this version on Heroku.

## My learning

I did not do extensive planning before beginning on version 4 for three reasons:

1. I had the MVP goals and the architecture planning available from version 2.
2. I hadn't thought what I would use for the back-end.
3. I only had foundational knowledge of React since for the CodeClan group project where we were required to use it I had elected to work on the back-end Java Spring functionality, and had therefore only been exposed to the basic implementation of creating a simple app with a handful of components.

This meant I began without a detailed plan of what I needed to learn and expected to zone in on what would be useful as I worked out what I needed to develop.

- I began by working through the CodeClan classnotes for React - around 15 hours of exercises. I used this to create the basic front-end architecture with the relevant Home, Teams, Fixtures, League Table and About pages using react-router-dom.
- I decided to use Node.js and Express.js on the back-end, connecting to a PostgreSQL databse. I used the CodeClan classnotes plus some online tutorials to set up the architecture, but had some difficulty with routes and neglected to finish the SQL queries needed to display the Teams and Fixtures data on the relevant API routes.
- I created the sports_scoring_app_v4 database with teams and fixtures tables using the psql commands and added data manually using pgAdmin4. I had difficulty connected the db to the server-side code and left this to one side while I went back to work on the front-end.
- Leaving the above two components of the app to go back to the front-end was a mistake; it led to multiple hours of confusion when I couldn't work out why my front-end CRUD requests were producing errors, and I would have progressed far more quickly had I completed this to begin with. This has influenced how I will build projects in the future, in that I'll ensure I have a simple and functional back-end before I try to access it using the front-end.
- Working first on the Teams CRUD functionality in React, I went through several days of learning, getting stuck, changing course, and continuing on:
  - I began by creating Class components, only to have the above mentioned difficulties accessing my database data (to simplify this I hardcoded some data first into LeagueContainer and then into server.js), and due to the nature of the code I was unsure where my errors were originating from.
  - I then refactored the app into functional components with Hooks, necessitating several days of following tutorials and guidelines to understand how to do this.
  - At this stage I returned to my Express.js back-end and expanded out the simplified code that had been causing errors. My `/api/teams` and `/api/fixtures` routes now rendered the database data in JSON format, able to be accessed by the front-end.
  - I completed getTeams(), getTeam() and addTeam(), but was having difficulty with deleteTeam(). This led to me learning about Context and how useful it can be.
  - I refactored with Context, again following tutorials and guidelines, which took a lot of the messy code out of my components/teams and components/fixtures files and made it easier to locate issues since they were almost always in the newly created LeagueState, or were easy to resolve since it was clear when I had not made the relevant state or function available in the component where I was trying to access it.
  - Once this was complete, I finished deleteTeam() with little difficulty. In working on EditTeamForm I was exposed to the concept of having TeamForm with a ternary operator to check whether it should be used for Add or Edit, and implemented this.
- Going through this process, while sometimes frustrating, has led to a significantly deeper understanding of React than I would have had with all the answers immediately available. It has helped me hone my instincts for what I should implement and when, and how to understand and resolve error messages.
- Once the Teams CRUD functionality was complete (albeit still requiring some refactoring before I'm fully happy with it - see comments in the individual files) I moved on to Fixtures CRUD functionality. It was a very straightforward process to duplicate the Teams code and make the necessary changes for Fixtures, FixtureItem and FixtureForm.
- There is still plenty of work to do on this app because there are some things I'm trying to implement (showing teamA.name/teamB.name rather than team_a_id/team_b_id on FixtureItem; rendering the League Table) which I don't have immediate solutions to, so I will need to continue learning and expect some of it to be very time-consuming, however after getting to this stage and learning as much as I have I'm confident that I'll achieve these tasks and increase my knowledge as a result.
