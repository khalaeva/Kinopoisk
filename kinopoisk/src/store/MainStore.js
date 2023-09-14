import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: [],
        movies: [],
        currentMovie: {}
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
            fetch(`http://localhost:3000/docs?id=${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.currentMovie = data[0]
                });
        },
        recommend(filmA, filmB) {
            console.log(filmA, filmB)
            const res = filmA.replace(/к/g, '')
            var words1 = res.split(/\s+/g),
            words2 = filmB.split(/\s+/g),
            i,
            j;

            for (i = 0; i < words1.length; i++) {
                for (j = 0; j < words2.length; j++) {
                    if (words1[i].toLowerCase() == words2[j].toLowerCase()) {
                    console.log('word '+words1[i]+' was found in both strings');
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