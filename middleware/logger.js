const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'logs.txt');

const logger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const entry = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      time: new Date().toISOString(),
      duration: `${duration}ms`
    };
    fs.appendFileSync(logFile, JSON.stringify(entry) + '\n');
  });
  next();
};

module.exports = logger;
