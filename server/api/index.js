"use strict";

const router = require("express").Router();
const countryRouter = require("./country");
// const bookRouter = require("./book");

router.use("/country", countryRouter);
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
