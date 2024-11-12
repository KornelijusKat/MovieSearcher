import ajaxService from "./ajaxService";
import movieInfo from "./movieInfo";
import storeSearches from "./storeSearches";
const searchMovie = () =>{
    const queryArray = [];
    document.querySelector('form').addEventListener('submit', (e) =>{
        e.preventDefault();
        const inputVal = document.querySelector('input')
        storeSearches(queryArray,inputVal.value);
        const movies = document.querySelector('.list-group');
        const parsedData =JSON.parse(localStorage.getItem(inputVal.value)); 
        if(parsedData !== null){
            movies.innerHTML = "";
            movieInfo(parsedData)
        }
        else{
            movies.innerHTML = "";
            ajaxService('s',inputVal.value).then(result =>{
                movieInfo(result.Search);
                localStorage.setItem(inputVal.value,JSON.stringify(result.Search));
    })}})
}
export default searchMovie;