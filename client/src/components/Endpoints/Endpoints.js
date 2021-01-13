import React, { useState } from "react";
import { StyledEndpoints } from './Endpoints.styled';
import { StyledForm } from '../Form.styled';
import { StyledButton } from '../Button.styled';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Endpoints() {

  const [loading, setLoading] = useState(false);

  // Function to toggle accordion
  const toggleAccordion = (e) => {
    e.target.nextSibling.classList.toggle("collapsed");
    e.target.classList.toggle("expanded");
  }

  // Submit the All Data form if user presses Enter on a form input
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      showAllData();
    }
  }

  // Style the JSON returned from the API
  function syntaxHighlight(json) {
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                  cls = 'key';
              } else {
                  cls = 'string';
              }
          } else if (/true|false/.test(match)) {
              cls = 'boolean';
          } else if (/null/.test(match)) {
              cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
      });
  }

  const showCategories = () => {

    // When categories are returned from the API, display them in the categories box
    function outputCategories(inp) {
      const allCategories = document.getElementById('allCategories');
      allCategories.innerHTML = inp;
    }

    // Remove starting content from categories box
    outputCategories("");
    // Show the loading animation for one second
    setLoading(true);
    setTimeout(() => {
      // API call
      axios.get(`/api/v1/categories`)
        .catch((error) => console.log(error))
        .then((res) => {
          // Data is returned from the API in an array, and needs to be converted to an object.
          let allCategories = Object.assign({}, res.data);
          // Format the returned data and output it
          let str = JSON.stringify(allCategories, undefined, 4);
          outputCategories(syntaxHighlight(str));
        })
        .then(setLoading(false))
    }, 1000);   
  };

  const showAllData = () => {

    // When the data is returned from the API, display it in the data box
    function outputAll(inp) {
      const allData = document.getElementById('allData');
      allData.innerHTML = inp;
    }
    
    // If the user inputs an ID to the form, update the query URL with the ID
    let _idVal = `${document.getElementById('_id').value}`;
    let _id = "";
    if (_idVal === "") {
      _id = "";
    } else {
      _id = `_id=${document.getElementById('_id').value}&`;
    };

    // If the user inputs a category to the form, update the query URL with the category
    let categoryVal = `${document.getElementById('category').value}`;
    let category = "";
    if (categoryVal === "") {
      category = "";
    } else {
      category = `category=${document.getElementById('category').value}&`;
    };

    // If the user inputs a number of letters to the form, add it to the query URL
    let numLettersVal = `${document.getElementById('numLetters').value}`;
    let numLetters = "";
    if (numLettersVal === "") {
      numLetters = "";
    } else {
      numLetters = `numLetters=${document.getElementById('numLetters').value}&`;
    };

    // If the user inputs a number of syllables to the form, add it to the query URL
    let numSyllablesVal = `${document.getElementById('numSyllables').value}`;
    let numSyllables = "";
    if (numSyllablesVal === "") {
      numSyllables = "";
    } else {
      numSyllables = `numSyllables=${document.getElementById('numSyllables').value}`;
    };

    // Remove starting content from the data box
    outputAll("");
    // Show the loading animation for one second
    setLoading(true);
    setTimeout(() => {
      // Make the API call, including query parameters if used.
      axios.get(`/api/v1/words/?${_id}${category}${numLetters}${numSyllables}`)
        .then((res) => {
          // The data returns from the API in an array and needs to be converted to an object.
          let allData = Object.assign({}, res.data);
          // Format the returned data and output it
          let str = JSON.stringify(allData, undefined, 4);
          outputAll(syntaxHighlight(str));
        })
        .then(setLoading(false))
    }, 1000);
        
  };

  const showRandom = () => {

    // When the random item is returned from the API, display it in the data box.
    function outputRandom(inp) {
      const random = document.getElementById('random');
      random.innerHTML = inp;
    }

    // First remove the initial content from the data box
    outputRandom("");
    // Display the loading animation for one second
    setLoading(true);
    setTimeout(() => {
      // Make the API call
      axios.get(`/api/v1/words/random`)
        .then((res) => {
          // The data returns from the API in an array and needs to be converted to an object.
          let random = Object.assign({}, res.data);
          // Format the data and display it in the data box
          let str = JSON.stringify(random, undefined, 4);
          outputRandom(syntaxHighlight(str));
        })
        .then(setLoading(false))
    }, 1000);
        
  };

  return (
    <main>
      <div className="wrapper">

        <StyledEndpoints>

          {/* Categories section */}
          <section className="endpoint">
            <h2 tabIndex="0" onKeyPress={toggleAccordion} onClick={toggleAccordion}>https://www.wordgamedb.com/api/v1/categories</h2>
            <div className="accordion collapsed">
              <p>Returns all categories from the database.</p>
              <p>Try it out below!</p>
              <StyledButton onClick={showCategories}>Show Categories ⬇</StyledButton>
              <pre id="allCategories">
                <p>Data will be displayed here!</p>
                <Loading loading={loading} />
              </pre>
            </div>
          </section>

          {/* All data section */}
          <section className="endpoint">
            <h2 tabIndex="0" onKeyPress={toggleAccordion} onClick={toggleAccordion}>https://www.wordgamedb.com/api/v1/words</h2>
            <div className="accordion collapsed">
              <p>Returns all words from the database.</p>
              <p>Optional query parameters:</p>

              <ul>
                <li>
                  <p>_id → Filter by id</p>
                </li>
                <li>
                  <p>category → Filter by category</p>
                </li>
                <li>
                  <p>numLetters → Filter by number of letters</p>
                </li>
                <li>
                  <p>numSyllables → Filter by number of syllables</p>
                </li>
              </ul>

              <p>For example, to return words from the plant category with four letters, the URL for your GET request would look like this:</p>
              <h3>https://www.wordgamedb.com/api/v1/words/?category=plant&numLetters=4</h3>
              <p>Try it out using the form below!</p>

              {/* Form for testing query parameters */}
              <StyledForm id="allDataForm">
                <label htmlFor="_id" className="sr-only">_id (optional)</label>
                <input id="_id" type="text" placeholder="_id" onKeyPress={handleKeyPress} />
                
                <label htmlFor="category" className="sr-only">Category (optional)</label>
                <input id="category" type="text" placeholder="category" onKeyPress={handleKeyPress} />

                <label htmlFor="numLetters" className="sr-only">numLetters</label>
                <input id="numLetters" type="number" min="1" placeholder="numLetters" onKeyPress={handleKeyPress} />

                <label htmlFor="numSyllables" className="sr-only">numSyllables (optional)</label>
                <input id="numSyllables" type="number" min="1" placeholder="numSyllables" onKeyPress={handleKeyPress} />
              </StyledForm>
              <StyledButton type="submit" onClick={showAllData}>Show Data ⬇</StyledButton>

              <pre id="allData">
                <p>Data will be displayed here!</p>
                <Loading loading={loading} />
              </pre>
            </div>
          </section>

          {/* Random item section */}
          <section className="endpoint">
            <h2 tabIndex="0" onKeyPress={toggleAccordion} onClick={toggleAccordion}>https://www.wordgamedb.com/api/v1/words/random</h2>
            <div className="accordion collapsed">
              <p>Returns a random word from the database.</p>
              <p>Try it out below!</p>
              <StyledButton onClick={showRandom}>Show Random ⬇</StyledButton>
              <pre id="random">
                <p>Data will be displayed here!</p>
                <Loading loading={loading} />
              </pre>
            </div>
          </section>
          
        </StyledEndpoints>
      </div>
    </main>
  )
}

export default Endpoints;