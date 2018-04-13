/**
 * JavaScript module that deals with API Calls.
 */

let express = require('express'),
  app = express();
  port = process.env.PORT || 3000;

app.listen(port);

console.log(`Opened API on PORT ${port}`);