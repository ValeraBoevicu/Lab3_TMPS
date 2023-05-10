import { MovieSystem } from "./MovieSystem.js";
import { ActionMovie } from "./Movie.js";
import { ComedyMovie } from "./Movie.js";
import { DramaMovie } from "./Movie.js";
import { ActionMovieAdapter } from "./MovieAdapter.js";
import { ComedyMovieAdapter } from "./MovieAdapter.js";
import { DramaMovieAdapter } from "./MovieAdapter.js";



const movieSystem = new MovieSystem();
let movie_action1 = new ActionMovie("Film1", "James Cameroon", 2006);
let movie_action2 = new ActionMovie("Film2", "James Cameroon", 2005);
let comedy_movie1 = new ComedyMovie("Film3", "James Cameroon", 2004);
let comedy_movie2 = new ComedyMovie("Film4", "James Cameroon", 2003);
let drama_movie1 = new DramaMovie("Film5", "James Cameroon", 2002);
let drama_movie2 = new DramaMovie("Film6", "James Cameroon", 2001);


movieSystem.addMovie(new ActionMovieAdapter(movie_action1));
movieSystem.addMovie(new ActionMovieAdapter(movie_action2));
movieSystem.addMovie(new ComedyMovieAdapter(comedy_movie1));
movieSystem.addMovie(new ComedyMovieAdapter(comedy_movie2));
movieSystem.addMovie(new DramaMovieAdapter(drama_movie1));
movieSystem.addMovie(new DramaMovieAdapter(drama_movie2));


const movieCount = movieSystem.getCount();
console.log(`Total movies: ${movieCount}`);


const actionMovieCount = movieSystem.getCountByType("action");
console.log(`Action movies: ${actionMovieCount}`);

const comedyMovieCount = movieSystem.getCountByType("comedy");
console.log(`Comedy movies: ${comedyMovieCount}`);

const dramaMovieCount = movieSystem.getCountByType("drama");
console.log(`Drama movies: ${dramaMovieCount}`);


movieSystem.removeMovie(new ActionMovieAdapter(movie_action1));


const newMovieCount = movieSystem.getCount();
console.log(`Total movies: ${newMovieCount}`);


