const express = require("express");
const router = express.Router();
const Word = require("../models/word");

// Endpoint to post a new word
// router.post("/v1/words", (req, res, next) => {
//   Word.create(req.body)
//     .then((data) => res.json(data))
//     .catch(next);
// });

// Endpoint to return all categories
router.get("/v1/categories", (req, res, next) => {
  Word.distinct("category")
    .then((data) => res.json(data))
    .catch(next);
});

// Endpoint to return all words, with optional query parameters
router.get("/v1/words", (req, res, next) => {
  let queryParameters = req.query;
  Word.find(queryParameters)
    .then((data) => res.json(data))
    .catch(next);
});

// Endpoint to return a random word
router.get("/v1/words/random", (req, res, next) => {
  // Get the number of documents
  Word.countDocuments().exec(function (err, count) {
    // Get a random entry number
    let random = Math.floor(Math.random() * count);
    // Again query all entries but only fetch one offset by our random #
    Word.findOne()
      .skip(random)
      .then((data) => res.json(data))
      .catch(next);
  });
});

module.exports = router;
