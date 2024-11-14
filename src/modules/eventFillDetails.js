import ajaxService from "./ajaxService";
import movieDetails from "./movieDetails";
const eventFillDetails = () => {
    document.querySelector('.list-group').addEventListener('click', (e) =>{
        const movieItem = e.target.closest('[data-value]');
        const detailsDiv = movieItem.querySelector('.tab-content');
        if (detailsDiv && detailsDiv.innerHTML.trim() !== "") {
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
        }
        else if(localStorage.getItem(movieItem.dataset.value)){
            movieDetails(JSON.parse(localStorage.getItem(movieItem.dataset.value)), movieItem);
        }
        else{
        ajaxService('i',movieItem.dataset.value).then(result => {
            movieDetails(result, movieItem);
            localStorage.setItem(movieItem.dataset.value,JSON.stringify(result));
        })}
    })
}
export default eventFillDetails