import $ from 'jquery';

export default function ImageApi() {
    let url = "";
    $.ajax({
        method: 'GET',
        url: 'https://api.thecatapi.com/v1/images/search',
        headers: { 'X-Api-Key': 'live_TCEQ500WZxDwqe7ZPYqHq74Uvt3qE2PpH2Ni0LWEnwkidYH2RD9ZcJboA8t7HZXR'},
        contentType: 'application/json',
        success: function(result) {
            url = result[0].url;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
      });
    return(<img src={url} />);
}