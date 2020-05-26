const express = require('express');

// 26/05/20: Constructed this when I hadn't thought in depth about the SQL queries my routes required. Not currently being used so I'll likely delete it.
const createRouter = function (data) {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.json(data);
  });

  router.get('/:id', (req, res) => {
    res.json(data[req.params.id]);
  });

  router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data);
  });

  router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data);
  });

  return router;
};

module.exports = createRouter;
