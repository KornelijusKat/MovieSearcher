const ajaxServiceDetails = (term) =>{
    const key = "5925a40b";
    console.log(term);
    const uri = `https://www.omdbapi.com/?i=${term}&apikey=${key}`
    return fetch(uri)
    .then(response => response.json())
}
export default ajaxServiceDetails