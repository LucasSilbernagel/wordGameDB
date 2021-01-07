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

  const showData = () => {
    
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
      showData();
    }
  }

  return (
    <main>
      <div className="wrapper">
        <StyledEndpoints>
          <StyledForm>
            <label htmlFor="_id" className="sr-only">_id (optional)</label>
            <input id="_id" type="text" placeholder="_id (optional)" onKeyPress={handleKeyPress} />
            
            <label htmlFor="category" className="sr-only">Category (optional)</label>
            <input id="category" type="text" placeholder="category (optional)" onKeyPress={handleKeyPress} />

            <label htmlFor="numLetters" className="sr-only">numLetters</label>
            <input id="numLetters" type="number" min="1" placeholder="numLetters (optional)" onKeyPress={handleKeyPress} />

            <label htmlFor="numSyllables" className="sr-only">numSyllables (optional)</label>
            <input id="numSyllables" type="number" min="1" placeholder="numSyllables (optional)" onKeyPress={handleKeyPress} />
          </StyledForm>
          <StyledButton type="submit" onClick={showData}>Show Data ⬇</StyledButton>
          <pre id="allData">
            <p>Data will be displayed here!</p>
            <Loading loading={loading} />
          </pre>
        </StyledEndpoints>
      </div>
    </main>
  )
}

export default Endpoints;