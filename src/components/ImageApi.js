export default function ImageApi() {
    fetch('api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        console.log("data")
    })
}