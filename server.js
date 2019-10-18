const express = require("express");
const mockRoutes = require("./mock");

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

app.use("/mock", mockRoutes);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "There was an error. Please try again" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
