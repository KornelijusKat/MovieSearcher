const ajaxService = (term) =>{
    const key = "5925a40b";
    const uri = `http://www.omdbapi.com/?s=${term}&apikey=${key}`
    return fetch(uri)
    .then(response => response.json())
}
export default ajaxService;