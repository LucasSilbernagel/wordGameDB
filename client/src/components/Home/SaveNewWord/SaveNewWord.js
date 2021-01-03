import React, { Component } from 'react';
import axios from 'axios';
import { StyledSaveNewWord } from './SaveNewWord.styled';
import { StyledButton } from '../../Button.styled';

class SaveNewWord extends Component {

  state = {
    word: "",
    category: "",
    numLetters: 0,
    numSyllables: 0
  }

  saveWord = () => {
    const wordObject = {
      word: this.state.word,
      category: this.state.category,
      numLetters: this.state.numLetters,
      numSyllables: this.state.numSyllables
    }

    // If all form fields are filled out, post to MongoDB. Otherwise, do nothing.
    if ((wordObject.word !== "") && (wordObject.category !== "") && wordObject.numLetters && wordObject.numSyllables) {
      axios.post('/api/v1/words', wordObject)
      .then(alert('Your word was saved to MongoDB successfully!'))
      .catch(err => console.log(err))
    }else {
      return;
    }
  }

  // Grab the value of each form field and pass to state
  handleChange = () => {
    this.setState({
      word: document.getElementById('word').value,
      category: document.getElementById('category').value,
      numLetters: document.getElementById('numLetters').value,
      numSyllables: document.getElementById('numSyllables').value
    })
  }

  render() {
    return (
      <StyledSaveNewWord >
        <p>Save a new word to the database using the form below:</p>
        <form>

          <label htmlFor="word" className="sr-only">Word</label>
          <input id="word" required type="text" placeholder="Word" onChange={this.handleChange} />
          
          <label htmlFor="category" className="sr-only">Category</label>
          <input id="category" required type="text" placeholder="Category" onChange={this.handleChange} />

          <label htmlFor="numLetters" className="sr-only">Number of letters</label>
          <input id="numLetters" required type="number" min="1" placeholder="Number of letters" onChange={this.handleChange} />

          <label htmlFor="numSyllables" className="sr-only">Number of syllables</label>
          <input id="numSyllables" required type="number" min="1" placeholder="Number of syllables" onChange={this.handleChange} />
          
          <StyledButton type="submit" onClick={this.saveWord}>Save word to API</StyledButton>
        </form>
      </StyledSaveNewWord >
    )
  }
}

export default SaveNewWord;