import logo from './logo.svg';
import './App.css';
import ImageApi from './components/ImageApi';
import $ from 'jquery';


// var category = 'inspirational'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'MuUkhgtCizYq7IyNBzrnkQ==QFFy5AKJHXXD7U01'},
//     contentType: 'application/json',
//     success: function(result) {
//         document.getElementById("quote").innerHTML = "\``" + result[0].quote + "\"";
//         document.getElementById("author").innerHTML = "-" + result[0].author;
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// $.ajax({
//   method: 'GET',
//   url: 'https://api.thecatapi.com/v1/images/search',
//   headers: { 'X-Api-Key': 'live_TCEQ500WZxDwqe7ZPYqHq74Uvt3qE2PpH2Ni0LWEnwkidYH2RD9ZcJboA8t7HZXR'},
//   contentType: 'application/json',
//   success: function(result) {
//       console.log(result[0].url)
//       document.getElementById("cat").src = result[0].url;
//   },
//   error: function ajaxError(jqXHR) {
//       console.error('Error: ', jqXHR.responseText);
//   }
// });
//Updates quote stuff
const JSON_DATA = require("./quote.json");
let quote =  "\``" + JSON_DATA.quote + "\"";
let author = "-" + JSON_DATA.author;
const IMAGE_DATA = require("./image.json");
let imageLink = IMAGE_DATA.url;
;
function App() {
  
  return (
    <div className="App">
      <header className="App-header" class="header">
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAcvPitsX3Exo6Uslbhr2TONRsNq9ztiDDgimppTnkuDIJugSIsdsx-siocdZiI6ckouHcNwnz7wREM2EDzr5xFWtLy1Q=w1920-h844" width="40vw" class="icon"/>
        <h1> Motivational Cat Pics</h1>
        <h6>Made by Sanika Ainchwar, Natalie Ajemian, Pranav Murthy, & Ankith Thalanki ❤️🍞</h6>
      </header>
      <div class="quoteWrapper">
        <h3 id="quote">{quote}</h3>
        <h5 id="author">{author}</h5>
      </div>
      <img id="cat" src={imageLink} width="350vw" height="350vh" class = "frameBorder"/>

      <div id="mc_embed_signup">
        <form action="https://gatech.us21.list-manage.com/subscribe/post?u=fc6ebe6bcd2470dd0224131ac&amp;id=21621326dd&amp;f_id=0069ebe6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group"><input type="email" name="EMAIL" class="requiredEmail" id="mce-EMAIL"  placeholder="enter your email to subscribe"required=""/></div>
              <div id="mce-responses" class="clear foot">
                  <div class="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div class="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
              <div aria-hidden="true" style={{position: 'absolute', left: -5000 + 'px'}}>
                /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                <input type="text" name="b_fc6ebe6bcd2470dd0224131ac_21621326dd" tabindex="-1" value=""/>
              </div>
              
              <div class="optionalParent">
                  <div class="clearfoot">
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Send me daily cat pictures!"/>
                  </div>
              </div>
            </div>
          </form>
      </div>

        
      </div>
    
  );
}

export default App;
