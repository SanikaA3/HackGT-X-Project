import logo from './logo.svg';
import './App.css';
import ImageApi from './components/ImageApi';

var category = 'inspirational'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'MuUkhgtCizYq7IyNBzrnkQ==QFFy5AKJHXXD7U01'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

$.ajax({
  method: 'GET',
  url: 'https://api.thecatapi.com/v1/images/search',
  headers: { 'X-Api-Key': 'live_TCEQ500WZxDwqe7ZPYqHq74Uvt3qE2PpH2Ni0LWEnwkidYH2RD9ZcJboA8t7HZXR'},
  contentType: 'application/json',
  success: function(result) {
      console.log(result);
  },
  error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catss!</h1>
      </header>
    </div>
  );
}

export default App;
