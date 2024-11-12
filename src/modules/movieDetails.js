import detailsHtml from "./detilsHtml";
const movieDetails = (movie,contentDiv) =>{ 
        let newDiv = contentDiv.querySelector('.tab-content');
        newDiv.innerHTML = "";
        newDiv.innerHTML = detailsHtml(movie);
        contentDiv.appendChild(newDiv);
      
};
export default movieDetails