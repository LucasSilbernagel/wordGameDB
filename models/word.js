const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Word schema
const WordSchema = new Schema({
  word: { type: String, lowercase: true, required: true },
  category: { type: String, lowercase: true, required: true },
  numLetters: { type: Number, required: true },
  numSyllables: { type: Number, required: true },
  hint: { type: String, required: true },
})

// Create Word model
const Word = mongoose.model('word', WordSchema);

module.exports = Word;