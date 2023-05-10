// Adapter pattern for interacting with different types of movies
class MovieAdapter {
    constructor(movie) {
        this.movie = movie;
    }

    getTitle() {
        return this.movie.title;
    }

    getDirector() {
        return this.movie.director;
    }

    getYear() {
        return this.movie.year;
    }


}

export class ActionMovieAdapter extends MovieAdapter {
    getType() {
        return "action";
    }
}

export class ComedyMovieAdapter extends MovieAdapter {
    getType() {
        return "comedy";
    }
}

export class DramaMovieAdapter extends MovieAdapter {
    getType() {
        return "drama";
    }
}
