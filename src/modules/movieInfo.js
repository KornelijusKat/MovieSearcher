const movieInfo = (movies) =>{
    movies.forEach(element => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('movie-card');
        newDiv.dataset.value = element.imdbID;
        /*let newDetailsDiv = document.createElement('div')
        let newImg = document.createElement('img');
        let newTitle = document.createElement('h4');
        let newYear = document.createElement('p');
        let newType = document.createElement('p');
        let newId = document.createElement('p');
        newDiv.dataset.value =  element.imdbID;
        newTitle.textContent = element.Title;
        newYear.textContent = element.Year;
        newImg.src = element.Poster;
        newImg.className ="img-fluid";
        newId.textContent = element.imdbID;
        newType.textContent = element.Type;
        newId.style.display = "none";
        newDetailsDiv.display ="none"
        newDetailsDiv.className ="tab-content"
        newDiv.append(newImg,newTitle,newYear,newType ,newId, newDetailsDiv);*/
        newDiv.innerHTML = `
            <div class="movie-card__center">
                <img src="${element.Poster}" class="img-fluid" alt="${element.Title} poster" />
                <h4 class="movie-title">${element.Title}</h4>
                <p class="movie-year"><strong>Year:</strong> ${element.Year}</p>
                <p class="movie-type"><strong>Type:</strong> ${element.Type}</p>
                <p class="movie-id" style="display: none;">${element.imdbID}</p>
            </div>
            <div class="tab-content" style="display: none;"></div>
        `;
        document.querySelector('.list-group').appendChild(newDiv);
       });
}
export default movieInfo