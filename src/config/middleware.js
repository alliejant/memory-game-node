const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const locus = require("locus");

function applyMiddleware(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("tiny"));
  return app;
}

module.exports = applyMiddleware;
