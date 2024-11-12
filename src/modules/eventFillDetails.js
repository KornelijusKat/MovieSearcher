import ajaxService from "./ajaxService";
import movieDetails from "./movieDetails";
const eventFillDetails = () => {
    document.querySelector('.list-group').addEventListener('click', (e) =>{
        const movieItem = e.target.closest('[data-value]');
        const detailsDiv = movieItem.querySelector('.tab-content');
        if (detailsDiv && detailsDiv.innerHTML.trim() !== "") {
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
        }
        else{
        ajaxService('i',movieItem.dataset.value).then(result => {
            movieDetails(result, movieItem);
        })}
    })
}
export default eventFillDetails