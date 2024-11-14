import infoHtml from "./infoHtml";

const movieInfo = (movies) =>{
    const listGroup = document.querySelector('.list-group');
    listGroup.innerHTML = "";
    movies.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('movie__card');
        newDiv.dataset.value = element.imdbID;
        newDiv.innerHTML = infoHtml(element)
        listGroup.appendChild(newDiv);
       });
}
export default movieInfo