// Bridge pattern for creating different types of movies
class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }
}

class MovieType {
    constructor(movie) {
        this.movie = movie;
    }

    getType() {
        console.log("Type:");
    }
}

export class ActionMovie extends Movie {
    getType() {
        return new ActionMovieType(this);
    }
}

export class ComedyMovie extends Movie {
    getType() {
        return new ComedyMovieType(this);
    }
}

export class DramaMovie extends Movie {
    getType() {
        return new DramaMovieType(this);
    }
}

export class ActionMovieType extends MovieType {
    getType() {
        return "action";
    }
}

export class ComedyMovieType extends MovieType {
    getType() {
        return "comedy";
    }
}

export class DramaMovieType extends MovieType {
    getType() {
        return "drama";
    }
}