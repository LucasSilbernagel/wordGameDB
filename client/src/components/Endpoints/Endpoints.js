import { StyledEndpoints } from './Endpoints.styled';
import { StyledButton } from '../Button.styled';
import axios from 'axios';

function Endpoints() {

  function output(inp) {
    const allData = document.getElementById('allData');
    allData.innerHTML = inp;
    console.log("success");
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
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
    axios.get('/api/v1/words')
      .then((res) => {
        let allData = Object.assign({}, res.data);
        let str = JSON.stringify(allData, undefined, 4);
        output(syntaxHighlight(str));
      });



    // setLoading(true)
    // setTimeout(() => {
    //   axios.get('/api/v1/words')
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('Something went wrong');
    //       }
    //     })
    //     .then(res => console.log(res))
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //     .then(setLoading(false))
    // }, 1000)
        
  };

  return (
    <main>
      <div className="wrapper">
        <StyledEndpoints>
          <StyledButton onClick={showAllData}>
            All data
          </StyledButton>
          <pre id="allData"></pre>
        </StyledEndpoints>
      </div>
    </main>
  )
}

export default Endpoints;