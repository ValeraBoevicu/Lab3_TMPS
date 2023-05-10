


// Facade pattern for managing the movie system
export class MovieSystem {
    constructor() {
        this.movieList = [];
    }

    addMovie(movie) {
        this.movieList.push(movie);
    }

    removeMovie(movie) {
        const index = this.movieList.indexOf(movie);
        if (index !== -1) {
            this.movieList.splice(index, 1);
        }
    }

    getAllMovies() {
        return this.movieList;
    }

    getCount() {
        return this.movieList.length;
    }

    getCountByType(type) {
        const count = this.movieList.reduce((accumulator, movie) => {
            if (movie.getType() === type) {
                return accumulator + 1;
            }
            return accumulator;
        }, 0);
        return count;
    }
}