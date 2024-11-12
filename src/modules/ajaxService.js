const ajaxService = (type,term) =>{
    const key = "5925a40b";
    const uri = `http://www.omdbapi.com/?${type}=${term}&apikey=${key}`
    return fetch(uri)
    .then(response => response.json())
}
export default ajaxService;