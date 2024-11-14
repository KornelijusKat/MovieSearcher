const detailsHtml = (movie) =>{
return `
<div class="movie__card">
    <div class="movie__header">
        <p class="movie__rating">Rated: <strong>${movie.Rated || 'N/A'}</strong></p>
    </div>
    <div class="movie__body">
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
    <div class="movie__footer">
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating || 'N/A'}</p>
    </div>
</div>
`
}
export default detailsHtml