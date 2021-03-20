const express = require('express');
const routes = require('./server/routes/index.js');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(routes);
app.use(express.json());
app.use(cors());


app.get('*', (req, res) => {
  res.send('Hello World!')
});

app.listen(port);
