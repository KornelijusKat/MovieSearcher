const movieDetails = (movie,contentDiv) =>{ 
        let newDiv = contentDiv.querySelector('.tab-content');
        newDiv.innerHTML = "";
        newDiv.innerHTML = `
    <div class="movie-card">
        <div class="movie-header">
            <p class="movie-rating">Rated: <strong>${movie.Rated || 'N/A'}</strong></p>
        </div>
        <div class="movie-body">
            <p><strong>Released:</strong> ${movie.Released || 'N/A'}</p>
            <p><strong>Runtime:</strong> ${movie.Runtime || 'N/A'}</p>
            <p><strong>Genre:</strong> ${movie.Genre || 'N/A'}</p>
            <p><strong>Director:</strong> ${movie.Director || 'N/A'}</p>
            <p><strong>Writer:</strong> ${movie.Writer || 'N/A'}</p>
            <p><strong>Actors:</strong> ${movie.Actors || 'N/A'}</p>
            <p class="movie-plot"><strong>Plot:</strong> ${movie.Plot || 'N/A'}</p>
            <p><strong>Language:</strong> ${movie.Language || 'N/A'}</p>
            <p><strong>Country:</strong> ${movie.Country || 'N/A'}</p>
        </div>
        <div class="movie-footer">
            <p><strong>IMDb Rating:</strong> ${movie.imdbRating || 'N/A'}</p>
        </div>
    </div>
`;
       /* Object.keys(movie).forEach((key) =>{
            if(!['Title','Year','Poster','Ratings','Website','Response','DVD','Production','BoxOffice'].includes(key)){
                let newElement = document.createElement('p');
                newElement.textContent = `${key}: ${movie[key]}`;
                newDiv.appendChild(newElement);
            }
            //contentDiv = document.querySelector('.tab-content')
            //content.innerHTML = "";
            contentDiv.appendChild(newDiv);
        }) */
        contentDiv.appendChild(newDiv);
      
};
export default movieDetails