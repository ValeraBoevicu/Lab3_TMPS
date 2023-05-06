# LAB3_TMPS
## Taks:Build an functional where use the pattern .
## Theory about the patterns:
### * The decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.
### * The facade pattern  is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or structural code.
### * The adapter pattern is a software design pattern  that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.
### * The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently", introduced by the Gang of Four. The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.
### 1. Decorator pattern for adding additional features to movies:
- Defines two classes that implement the Decorator pattern, which allows adding additional features to movie without modifying their underlying structure.
```
class MovieDecorator
```
and
```
class MovieWithGenre
```
- The MovieDecorator class is the base decorator class that wraps around a movie object and provides a common interface for interacting with the decorated movie.
```
export class MovieDecorator {
    constructor(movie) {
        this.movie = movie;
    }
```
- It has a printDetails() method that prints out the basic details of the movie, such as the title, year, and director.
```
 printDetails() {
        console.log(`${this.movie.getTitle()} (${this.movie.getYear()}) directed by ${this.movie.getDirector()}`);
    }
}
```
- The MovieWithGenre class is a concrete decorator that adds a genre property to the movie object. It extends the MovieDecorator class and overrides its printDetails() method to first call the parent method to print the basic details, and then print out the genre.
```
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
```
### 2.Facade pattern for managing the movie system:
- The code defines a class MovieSystem that provides a simple interface for adding, removing, and getting information about movies in the system.
```
export class MovieSystem {
    constructor() {
        this.movieList = [];
    }
```
- add a movie to the system:
```
addMovie(movie) {
        this.movieList.push(movie);
    }
```
- remove a movie from the system:
```
removeMovie(movie) {
        const index = this.movieList.indexOf(movie);
        if (index !== -1) {
            this.movieList.splice(index, 1);
        }
    }
```
- get all the movies in the system:
```
getAllMovies() {
        return this.movieList;
    }
```
### 3. Adapter pattern for interacting with different types of movies:
- This section defines the MovieAdapter class, which adapts different types of movies to a common interface. The class has a constructor that takes a movie object as its parameter and sets it as an instance variable. The class also has three methods: getTitle(), getDirector(), and getYear(), which retrieve the title, director, and year of the movie, respectively.
```
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
```
- These sections define the adapter classes that extend MovieAdapter. Each class overrides the getType() method to return the type of the movie it is adapting ("action", "comedy", or "drama") and with these adapter classes, different types of movies can be adapted to the same interface, allowing them to be used interchangeably in the code that interacts with them.
```
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
```
### 4.Bridge pattern for creating different types of movies:

