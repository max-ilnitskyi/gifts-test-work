# Gifts - test work

## Available Scripts

### Global

#### `npm run start`

Runs the server without defining a mode.

#### `npm run build`

Runs `npm install` and `npm run build` from /client sripts. Mainly need for deploy at heroku.

#### `npm run client`

Runs `npm run start` from /client sripts.

#### `npm run server`

Uses nodemon package to runs the server without defining a mode.
Nodemon will reload server if any error will occurred.

#### `npm run dev`

Uses concurrently package to runs `npm run server` and `npm run client` commands in parallel.

### Client

You can see in client/README.md
