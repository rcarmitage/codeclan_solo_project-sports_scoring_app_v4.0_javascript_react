const express = require('express');

// 26/05/20: I intended to use the same method as seeds.rb in Sports Scoring App v2 where the user would run the seeds file to populate the database then run the app. I haven't yet worked out whether this is the best way to do things or how I should implement it.
const team01 = {
  name: 'The Gym Bunnies (db seeds.js)',
  played: 2,
  won: 1,
  lost: 1,
  points: 1,
};

const team02 = {
  name: 'Shop Winventory (db seeds.js)',
  played: 2,
  won: 2,
  lost: 0,
  points: 2,
};

const team03 = {
  name: 'Spending Tracker Big Spenders (db seeds.js)',
  played: 2,
  won: 0,
  lost: 2,
  points: 0,
};

const team04 = {
  name: 'Sports Scorers (db seeds.js)',
  played: 2,
  won: 2,
  lost: 2,
  points: 0,
};

const team05 = {
  name: 'Travel Bucket List Jetsetters (db seeds.js)',
  played: 2,
  won: 1,
  lost: 1,
  points: 1,
};

const team06 = {
  name: 'Vet Squad Managers (db seeds.js)',
  played: 2,
  won: 0,
  lost: 2,
  points: 0,
};

const fixturesData = [
  // TODO: work out how to use above teams for fixturesData
];
