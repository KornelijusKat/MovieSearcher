const viewHistory = () => {
    document.querySelector('.history').addEventListener('click',(e)=>{
        e.preventDefault();
        const movies = document.querySelector('.list-group');
        movies.innerHTML = "";
        let card = document.createElement('div');
        card.className = "movie-card";
        JSON.parse(localStorage.getItem("searchedTerms")).forEach(element => {
            let search = document.createElement('p');
            search.textContent = element;
            card.appendChild(search);
        });
        movies.appendChild(card);
    })
}
export default viewHistory;