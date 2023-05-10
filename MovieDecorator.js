
// Decorator pattern for adding additional features to movies
export class MovieDecorator {
    constructor(movie) {
        this.movie = movie;
    }

    printDetails() {
        console.log(`${this.movie.getTitle()} (${this.movie.getYear()}) directed by ${this.movie.getDirector()}`);
    }
}

export class MovieWithGenre extends MovieDecorator {
    constructor(movie, genre) {
        super(movie);
        this.genre = genre;
    }

    printDetails() {
        super.printDetails();
        console.log(`Genre: ${this.genre}`);
    }
}