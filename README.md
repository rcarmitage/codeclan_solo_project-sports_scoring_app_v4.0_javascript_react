# Sports Scoring App v4

### A full-stack app for showing Teams and Fixtures in a League

This is _version 4_.

I created _version 1_ using **Ruby** and **Sinatra** as my first project during week 5 (August 2019) of the CodeClan Professional Software Development course.

Upon completion of the course I have recreated the app using different languages and frameworks in order to further understand implementation of functionality and design choices.

I have created _version 4_ with a **React.js front-end** and a **Node.js**, **Express.js** and **PostgreSQL back-end**. I began work on _version 4_ in April 2020.

Other versions:

- Version 1: [Sports Scoring App - Ruby & Sinatra (created on a Mac)](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v1.0_ruby_sinatra)
- Version 2: [Sports Scoring App - Ruby & Sinatra (created on Windows)](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v2.0_ruby_sinatra)
- Version 3: [Sports Scoring App - JavaScript & Vue](https://github.com/rcarmitage/codeclan_solo_project-sports_scoring_app_v3.0_javascript_vue)

## Brief

### MVP:

A user should be able to…

- Create, edit and delete Teams to the League
- Create, edit and delete Fixtures
- There should be a way to display all the Fixtures for a Team and all the Teams involved in a Fixture
- The app should display if a Fixture was won or lost

### Extensions:

- Create a League Table to see who is on top of the League
- Self-selected extension: Add "Play a Game" functionality, i.e. the user would select two Teams and the app would select a winner from these

## Running the App After Pulling from GitHub

### Installation

(Pending)

### Using the Sports Scoring App

(Pending)

## App Details

The following functionality is currently in the process of being implemented and is partially complete - see the status notes and My Learning (below) for more details. Further information and screenshot will be added once the app is fully functional:

- From Home you can select to view the Teams list, the Fixtures list, or the League Table. You can also navigate straight to the Add Team page.

- The Teams page lists all Teams in the League. You can edit or delete an individual Team, view the Team details including all Fixtures the Team has taken part in, or add a Team to the League.

- The Fixtures page lists all the Fixtures between Teams in the League. You can edit the Teams in a Fixture and who the winning and losing Teams are, or delete a Fixture.

- The League Table page shows the Teams displayed by Points awarded.

Status of the app and plans for further development as of 26th May 2020:

- The framework of the Home, Teams, Fixtures and About pages is complete. The Teams data are displayed as per the design. The Fixtures data currently displays the database `team_id` number of the Teams in each Fixture (as `team_a_id`, `team_b_id` and `winning_team_id`), rather than the Team name. I plan to access and render the Team names.
- The individual Team pages do not show any information other than the Team name. I plan to display all the Fixtures for that Team on this page, displaying whether they won or lost.
- The Add Team and Edit Team functionality is complete.
- The Delete Team functionality works for any Teams with no Fixtures, however there is an error when trying to delete a Team with at least one Fixture due to the foreign key reference. Firstly, I plan to display an alert to the user if they try to delete a Team with a Fixture, explaining that they will need to delete all Fixtures for that Team first. Secondly, I plan to produce an alert that notifies the user that deleting a Team deletes all Fixtures they are assigned to, and a confirmation click from the user cascades the delete through all relevant Fixtures.
- The Add Fixture and Edit Fixture functionality works on a fundamental level, with the user being required to type in a database `team_id` number of a Team into a text field. I plan to produce a dropdown menu of the Teams in the League, which the user can select from to populate the Team A and Team B fields. I plan to have a button to select one of the teams as the Winner (posted to the db as `winning_team_id`), with the other being recorded as the Loser (posted to the db as `losing_team_id`).
- The Delete Fixture functionality is complete.
- The League Table is not complete. The `components/league_table` files are likely to be deleted and a simpler implementation be attempted. I have made design changes from version 2, in which the Team entry had games played/won/lost and points which were used in rendering the League Table. In version 4 the Team entry only has a Team name, and all Fixture data is stored in the fixtures table. I plan to use the Fixtures data for each Team to produce the games played/won/lost and points, and sort this by points descending to create the League Table.
- CSS: I used the CSS from version 2 here, but have not fully implemented it. I plan to do this once app functionality is complete.
- I plan to upload and display this version on Heroku once it is fully functional.

## My learning

I did not do extensive planning before beginning on _version 4_ for three reasons:

1. I had the MVP goals and the architecture planning available from _version 2_.
2. I hadn't thought about what I would use for the back-end, only planning to use **React** with a view to settling on other technologies once I had a simple version of the front-end.
3. I had only foundational knowledge of **React**. For the CodeClan group project where we were required to use it ([CodeClanNewsProject](https://github.com/MichaelA26/CodeClanNewsProject)) I had elected to work largely on the back-end Java Spring functionality, and had therefore only personally worked on creating very simple apps with a handful of components.

This meant I began without a detailed plan of what I would be required to learn and expected to zone in on what would be useful as I worked out what I needed.

- I began by working through the CodeClan classnotes for **React** again in detail - around 15 hours of exercises. I used this knowledge to create the basic front-end architecture with the relevant Home, Teams, Fixtures, League Table and About pages using Class components and `react-router-dom`.
- I decided to use **Node.js** and **Express.js** for the back-end, connecting to a **PostgreSQL** database. I used the CodeClan classnotes along with some online tutorials to set up the architecture, but had some difficulty with routes and neglected to finish the SQL queries needed to display the Teams and Fixtures data on the relevant API routes.
- I created the `sports_scoring_app_v4` database with `teams` and `fixtures` tables using `psql` command line commands and entered data manually using pgAdmin4. I had difficulty connecting the db to the server-side files and left this to one side while I went back to work on the front-end.
- Leaving the back-end unfinished to go back to the front-end was, in hindsight, a mistake; it led to multiple hours of confusion when I couldn't work out why my front-end CRUD requests were producing errors, and I would have progressed far more quickly had I completed this to begin with. This has influenced how I will design and build projects in the future, in that I'll ensure I have a simple and functional back-end before I try to access it using the front-end.
- Working first on the Teams CRUD functionality in **React**, I went through several days of learning, getting stuck, changing course, and continuing on:
  - I began by creating Class components, only to have the above mentioned difficulties accessing my database data (to simplify this I hardcoded some data first into `LeagueContainer.js` and then into `server.js` once I had set up the `getTeams()` function with a fetch), and due to the nature of the code I often found it difficult to determine where my errors were originating from.
  - I then refactored the app into functional components with Hooks, necessitating several days of following tutorials and guidelines to understand how to do this.
  - At this stage I returned to my Express.js back-end and expanded out the simplified code that was not fit for purpose. My `/api/teams` and `/api/fixtures` routes now rendered the database data in JSON format, able to be accessed by the front-end. This cleared some blockages that allowed me to make significant progress.
  - I completed `getTeams()` for `Teams.js`, `getTeam()` for `Team.js` and `addTeam()` for `AddTeamForm.js`, but was having difficulty with `deleteTeam()` which was to be available in both `Teams.js` (within `TeamItem.js`) and `Team.js`. This led to me learning about Context and how useful it can be for having state and functions available to any component at any time without prop-drilling.
  - I refactored with Context, again following tutorials and guidelines, which took a lot of the messy code out of my `components/teams` and `components/fixtures` files and made it easier to locate issues since they were almost always in the newly created `LeagueState.js`, or were easy to resolve since it was clear when I had not made the relevant state or function available in the component where I was trying to access it.
  - Once this was complete, I finished `deleteTeam()` with little difficulty. In working on `EditTeamForm.js` I was exposed to the concept of having `TeamForm.js` with a ternary operator to check whether it should be used for Add or Edit, and implemented this.
- Going through this convoluted process, while sometimes frustrating, has led to a significantly deeper understanding of **React** than I would have had with all the answers immediately available. It has helped me hone my instincts for what I should implement and when, and how to understand and resolve error messages.
- Once the Teams CRUD functionality was complete (albeit still requiring some refactoring before I'm fully happy with it - see comments in the individual files) I moved on to Fixtures CRUD functionality. It was a very straightforward process to duplicate the Teams code and make the necessary changes for `Fixtures.js`, `FixtureItem.js` and `FixtureForm.js`.
- There is still plenty of work to do on this app because there are some things I'm trying to implement (showing `teamA.name`/`teamB.name` rather than `team_a_id`/`team_b_id` on `FixtureItem.js`; rendering the League Table) which I don't have immediate solutions to, so I will need to continue learning and expect some of it to be very time-consuming, however after getting to this stage and learning as much as I have I'm confident that I'll achieve these tasks and increase my knowledge as a result.
