"use strict";

// MUST BE RUNNING AS ROOT!
if (process.getuid()) {
  throw new Error("You must run nodejs as root");
}

const app = require('express')();
const PORT = 9999
const RCLOUD_HOSTNAME = "http://127.0.0.1:8080";
// const RCLOUD_HOSTNAME = "http://159.8.21.236:8080";

app.get("/tmp/*", (req, res) => {
  // Only allow requests from rcloud
  res.header("Access-Control-Allow-Origin", RCLOUD_HOSTNAME);
  res.header("Access-Control-Allow-Methods", "GET");

  // Send the requested file
  res.sendFile(req.params[0], {
    root: '/tmp'
  });
});

app.use((req, res) => {
  res.send("tmp file server");
})

app.listen(PORT, () => {
  console.log('Listening on ' + PORT);
}).on('error', e => {
  console.error(e.message);
});
