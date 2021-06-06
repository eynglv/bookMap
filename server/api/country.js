const router = require("express").Router();
const { Country } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

router.get("/:countryId", async (req, res, next) => {
  try {
    const id = req.params.countryId;
    const country = await Country.findByPk(id);
    res.json(country);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  res.status(404).json("No Country Found In Database!");
});

module.exports = router;
