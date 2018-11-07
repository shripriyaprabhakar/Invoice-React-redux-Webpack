
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));


let port = 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

