const express = require('express');
const redis = require('redis');
//uncomment below line for system crash
//const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});

const visitsKey = 'visits';
client.set(visitsKey, 0);

app.get('/', (req, res) => {
  //uncomment below line for system crash
  //process.exit(12);
  //with restart policy as on-failure,
  //it will only restart with non zero code
  client.get(visitsKey, (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set(visitsKey, parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
