const path = require('path');
const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const helmet = require('helmet');

const config = require('./config');

// Create app
const app = express();

app.use(helmet()); // secure headers
app.use(logger('dev')); // log request information
app.use(compression()); // compress response

// Express only serves static assets in production
// For development this job does client dev server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, config.staticBuildRelativePath)));
}

// If get request, always send index.html (if not resolved before)
if (process.env.NODE_ENV === 'production') {
  // Path to index.html file
  const indexPath = path.join(
    __dirname,
    config.staticBuildRelativePath,
    'index.html'
  );

  // Send index.html to all get requests if cient accept html
  app.get('*', (req, res, next) => {
    if (!req.accepts('html')) next();

    res.sendFile(indexPath);
  });
}

// Global not found
app.use((req, res) => {
  res.sendStatus(404);
});

// Global errors handler, send server error 500
app.use((error, req, res, next) => {
  console.log(`-----express error: `, error);

  res.sendStatus(500);
});

// Run server
app.listen(config.serverPort, () => {
  console.log(`Server running on port ${config.serverPort}`);
});
