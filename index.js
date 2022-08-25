const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

const visitsKey = 'visits';
client.set(visitsKey, 0);

app.get('/', (req, res) => {
  client.get(visitsKey, (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set(visitsKey, parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
