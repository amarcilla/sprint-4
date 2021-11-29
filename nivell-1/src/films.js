// Exercise 1: Get the array of all directors.
 function getAllDirectors(array) {
   let result = [];

   result = array.map(movie => {
     console.log("EXERCICE 1 ->", movie.director);
     return movie.director;
 });
   return result;
 }


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let films = movies.filter(movie => movie.director == director);

  return films;

}

function moviesAverage(films) {
  // acumulem a la variable score = la puntuacio de cada pelicula
  // a la varaible contador anem guardant el que anem sumant ... en aquest cas film.score
  // El 0 serveix per incialitzar la variable contador = 0
  const scores = films.reduce((contador, film) => {
    //should return average even if one of the movies does not have score
    if (film.score ) {
      return contador + film.score
      console.log("film: " + film.title + " Score: " + film.score + " sumatori score: " + (parseFloat(contador) + parseFloat(film.score)));
    } else {
      return contador
    }    
  }, 0);

  // Calculem la mitja... deixem a dos decimals
  const mitja = (scores / parseInt(films.length)).toFixed(2);
  console.log("-----------------------------");
  console.log("Total Scores " + scores.toFixed(2) + " Numero pelis " + films.length);
  console.log("Mitja Scores: " + mitja);
  return parseFloat(mitja);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  // Filtrem totes les pelis del Director seleccionat
  const films = movies.filter(movie => movie.director == director);
  console.log("Director: " + director);
  const MoviesByAverage = moviesAverage(films);

  return MoviesByAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {  

  let result = movies.map(movie => {
    console.log("titol ->", movie.title);
    return movie.title;
  });

  result.sort();
  const vintPrimers = result.slice(0, 20);
  return vintPrimers;

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = movies.map(movie => ({
    year: movie.year,
    title: movie.title
  }
  ));

  // Primer ho endreçem per titol pq així quedarà endreçat alfabeticament. 
  result.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
  // ara ho endreçem per any
  result.sort((a, b) => a.year - b.year);

  //result.sort();
  const vintPrimers = result.slice(0, 20);
  return vintPrimers;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, categoria) {
  console.log("genre: " + categoria);
  console.log("--------------------");

  // Filtrem totes les pelis de la categroia seleccionada
  var films = movies.filter(function (movie) {
    const genres = movie.genre ;
    // Miram cada un dels gèneres de la pelicula.. o estic fent amb Vanilla JS.. es pot fer amb ES6?
    for (let i = 0; i < genres.length; i++) {
      if ( genres[i]  == categoria){
        console.log(movie.title );
        return movie;
      }
    }
    });

  // Calculem la mitjana de puntuació
  return moviesAverage(films);

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
