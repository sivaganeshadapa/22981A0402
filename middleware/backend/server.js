const express = require('express');
const bodyParser = require('body-parser');
const shorturlRouter = require('./routes/shorturl');
const logger = require('./middleware/logger');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(logger);
app.use('/shorturls', shorturlRouter);
app.get('/:code', shorturlRouter);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
