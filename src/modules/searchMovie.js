import ajaxService from "./ajaxService";
import movieInfo from "./movieInfo";
import storeSearches from "./storeSearches";
const searchMovie = () =>{
    const queryArray = [];
    document.querySelector('form').addEventListener('submit', (e) =>{
        e.preventDefault();
        const inputVal = document.querySelector('input')
        storeSearches(queryArray,inputVal.value);
        console.log(JSON.parse(localStorage.getItem("searchedTerms")));
        const movies = document.querySelector('.list-group');
        if (movies && movies.innerHTML.trim() !== "") {
            movies.innerHTML = "";
        }
        ajaxService(inputVal.value).then(result =>{
            movieInfo(result.Search);
    })})
}
export default searchMovie;