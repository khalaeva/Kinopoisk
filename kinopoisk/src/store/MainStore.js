import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: [],
        movies: [],
        currentMovie: {},
        keyTxt: ['комедия', 'боевик', 'драма', 'детектив', 'триллер', 'блокбастер', 'Marvel'],
        recommendMovies: [],
        dataMovies: []
    }),
    actions: {
        like() {
            this.currentMovie.liked = true
            localStorage.setItem(`${this.currentMovie.id}`, JSON.stringify(this.currentMovie))
        },
        unlike() {
            this.currentMovie.liked = false
            localStorage.setItem(`${this.currentMovie.id}`, JSON.stringify(this.currentMovie))
        },
        rateMovie(num) {
            this.currentMovie.myRating = `${num}`
            localStorage.setItem(`${this.currentMovie.id}`, JSON.stringify(this.currentMovie))
        },
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
                let a = JSON.parse(localStorage.getItem(localStorage.key(i)))
                if (a.myRating || a.liked) {
                    this.movies.push(a);
                }
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
                    this.dataMovies = data
                    this.pagination(this.movies)
                });
        },
        getMovieById(id) {
            this.currentMovie = {}
            if (localStorage.getItem(`${id}`)) {
                this.currentMovie = JSON.parse(localStorage.getItem(`${id}`))
                if (this.currentMovie.myRating === undefined) {
                    this.currentMovie.myRating = 0
                }
                if (this.currentMovie.liked === undefined) {
                    this.currentMovie.liked = false
                }
            }
            else {            
                fetch(`http://localhost:3000/docs?id=${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.currentMovie = data[0]
                    this.currentMovie.myRating = 0
                    this.currentMovie.liked = false
                });
            }
        },
        recommend(movie) {
            this.recommendMovies = [] 
            var genre
            var persons = []

            for (let i = 0; i < this.keyTxt.length; i++) {
                if (movie.indexOf(this.keyTxt[i]) != -1) {
                    genre = this.keyTxt[i]
                } 
            }
            
            for (let i = 0; i < this.dataMovies.length; i++) {
                if (this.dataMovies[i].shortDescription && genre && this.dataMovies[i].shortDescription != movie) {
                    if (this.dataMovies[i].shortDescription.indexOf(genre) != -1) {
                        this.recommendMovies.push(this.dataMovies[i])
                    }
                }
            }
            
            movie.replace(/[А-Я][а-я]*/g, u => persons.push(u))

            for (let i = 0; i < this.dataMovies.length; i++) {
                if (movie != this.dataMovies[i].shortDescription && this.dataMovies[i].shortDescription) {
                    for (let j = 0; j < persons.length; j++) {
                        if (this.dataMovies[i].shortDescription.indexOf(` ${persons[j]} `) >= 0) {
                            this.recommendMovies.push(this.dataMovies[i])
                            break
                        }
                    }
                }
            }

            this.recommendMovies.sort(() => Math.random() - 0.5)
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