const express = require('express');
const app = express();
const port = 3000 || 8080;

app.all('/', (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  res.send(`24/7 KeepAlive Server is online!`);
  res.end();
});

function k() {
  app.listen(port, () => {
    console.log("24/7 KeepAlive Server is online!".bgGreen.white)
  });
}
module.exports = k;
