import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: [],
        movies: [],
        currentMovie: {},
        keyTxt: ['комедия', 'боевик', 'драма', 'детектив', 'триллер', 'блокбастер', 'Marvel'],
        recommendMovies: []
    }),
    actions: {
        pagination(arr) {
            this.moviesByPages = []
            let size = 20
            for (let i = 0; i < Math.ceil(arr.length / size); i++){
                this.moviesByPages[i] = arr.slice((i*size), (i*size) + size)
            }
        },
        getMoviesFromLocalStorage() {
            this.movies = []
            for (var i = 0; i < localStorage.length; i++){
                this.movies.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            this.pagination(this.movies)
        },
        getMoviesFromAPI() {
            fetch('http://localhost:3000/docs')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.movies = data
                    this.pagination(this.movies)
                });
        },
        getMovieById(id) {
            this.currentMovie = {}
            fetch(`http://localhost:3000/docs?id=${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.currentMovie = data[0]
                });
            
        },
        recommend(movie) {
            this.recommendMovies = [] 
            var genre

            for (let i = 0; i < this.keyTxt.length; i++) {
                if (movie.indexOf(this.keyTxt[i]) != -1) {
                    genre = this.keyTxt[i]
                } 
            }
            console.log(genre)
            for (let i = 0; i < this.movies.length; i++) {
                if (this.movies[i].shortDescription && genre) {
                    if (this.movies[i].shortDescription.indexOf(genre) != -1) {
                        this.recommendMovies.push(this.movies[i])
                    }
                }
            }
        },
        moviesByYearsNew() {
            this.movies.sort((a, b) => a.year - b.year)
            this.pagination(this.movies)
        },
        moviesByYearsOld() {
            this.movies.sort((a, b) => a.year - b.year)
            this.movies.reverse()
            this.pagination(this.movies)
        },
        moviesByRatingBest() {
            this.movies.sort((a, b) => a.rating.kp - b.rating.kp)
            this.movies.reverse()
            this.pagination(this.movies)
        },
        moviesByRatingWorst() {
            this.movies.sort((a, b) => a.rating.kp - b.rating.kp)
            this.pagination(this.movies)
        },
        moviesByLenghtLong() {
            this.movies.sort((a, b) => a.movieLength - b.movieLength)
            this.movies.reverse()
            this.pagination(this.movies)
        },
        moviesByLenghtShort() {
            this.movies.sort((a, b) => a.movieLength - b.movieLength)
            this.pagination(this.movies)
        }
    }
})