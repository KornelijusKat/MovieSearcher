const infoHtml = (element)=>{
    return `
            <div class="movie-card__center">
                <img src="${element.Poster}" class="img-fluid" alt="${element.Title} poster" />
                <h4 class="movie-title">${element.Title}</h4>
                <p class="movie-year"><strong>Year:</strong> ${element.Year}</p>
                <p class="movie-type"><strong>Type:</strong> ${element.Type}</p>
                <p class="movie-id" style="display: none;">${element.imdbID}</p>
            </div>
            <div class="tab-content" style="display: none;"></div>
        `;
}
export default infoHtml