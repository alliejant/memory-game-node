const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({ express: "Hello From Express" });
});

router.post("/", (req, res, next) => {
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

module.exports = router;
