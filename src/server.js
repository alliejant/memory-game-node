const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const applyMiddleware = require("./config/middleware");
const mockRoutes = require("./mock");

let app = express();
const port = process.env.PORT || 9000;

app = applyMiddleware(app);
app.use("/mock", mockRoutes);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "There was an error. Please try again" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
