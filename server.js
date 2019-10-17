const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const locus = require("locus");

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  res.send({ express: "Hello From Express" });
});

app.post("/", (req, res, next) => {
  if (req.body && req.body.post) {
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`
    );
  } else {
    const err = new Error("No valid post received");
    err.status = 400;
    return next(err);
  }
});

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "There was an error. Please try again" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
