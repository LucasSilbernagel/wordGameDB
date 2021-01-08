import React, { useState } from "react";
import { StyledEndpoints } from './Endpoints.styled';
import { StyledForm } from '../Form.styled';
import { StyledButton } from '../Button.styled';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Endpoints() {

  const [loading, setLoading] = useState(false);

  function output(inp) {
    const allData = document.getElementById('allData');
    allData.innerHTML = inp;
  }

  function output2(inp) {
    const allCategories = document.getElementById('allCategories');
    allCategories.innerHTML = inp;
  }

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

  const showAllData = () => {
    
    let _idVal = `${document.getElementById('_id').value}`;
    let _id = "";
    if (_idVal === "") {
      _id = "";
    } else {
      _id = `_id=${document.getElementById('_id').value}&`;
    };

    let categoryVal = `${document.getElementById('category').value}`;
    let category = "";
    if (categoryVal === "") {
      category = "";
    } else {
      category = `category=${document.getElementById('category').value}&`;
    };

    let numLettersVal = `${document.getElementById('numLetters').value}`;
    let numLetters = "";
    if (numLettersVal === "") {
      numLetters = "";
    } else {
      numLetters = `numLetters=${document.getElementById('numLetters').value}&`;
    };

    let numSyllablesVal = `${document.getElementById('numSyllables').value}`;
    let numSyllables = "";
    if (numSyllablesVal === "") {
      numSyllables = "";
    } else {
      numSyllables = `numSyllables=${document.getElementById('numSyllables').value}`;
    };

    output("");
    setLoading(true);
    setTimeout(() => {
      axios.get(`/api/v1/words/?${_id}${category}${numLetters}${numSyllables}`)
        .then((res) => {
          let allData = Object.assign({}, res.data);
          let str = JSON.stringify(allData, undefined, 4);
          output(syntaxHighlight(str));
        })
        .then(setLoading(false))
    }, 1000);
        
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      showAllData();
    }
  }

  const showCategories = () => {

    output2("");
    setLoading(true);
    setTimeout(() => {
      axios.get(`/api/v1/categories`)
        .then((res) => {
          let allCategories = Object.assign({}, res.data);
          let str = JSON.stringify(allCategories, undefined, 4);
          output2(syntaxHighlight(str));
        })
        .then(setLoading(false))
    }, 1000);
        
  };

  return (
    <main>
      <div className="wrapper">
        <StyledEndpoints>
          <div className="endpoint">
            <h2>https://www.wordgamedb.com/api/v1/categories</h2>
            <p>Returns all categories from the database.</p>
            <p>Try it out below!</p>
            <StyledButton onClick={showCategories}>Show Categories ⬇</StyledButton>
            <pre id="allCategories">
              <p>Data will be displayed here!</p>
              <Loading loading={loading} />
            </pre>
          </div>

          <div className="endpoint">
            <h2>https://www.wordgamedb.com/api/v1/words</h2>
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
        </StyledEndpoints>
      </div>
    </main>
  )
}

export default Endpoints;