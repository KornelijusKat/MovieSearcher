const infoHtml = (element)=>{
    return `
            <div class="movie__card__center">
                <img src="${element.Poster}" class="img-fluid" alt="${element.Title} poster" />
                <h4 class="movie__title">${element.Title}</h4>
                <p class="movie__year"><strong>Year:</strong> ${element.Year}</p>
                <p class="movie__type"><strong>Type:</strong> ${element.Type}</p>
                <p class="movie__id" style="display: none;">${element.imdbID}</p>
            </div>
            <div class="tab-content" style="display: none;"></div>
        `;
}
export default infoHtml