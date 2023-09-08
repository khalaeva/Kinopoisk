import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: [],
        movies: [],
        currentMovie: {}
    }),
    actions: {
        getMoviesFromAPI() {
            fetch('http://localhost:3000/docs')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.movies = data
                    let size = 20
                    for (let i = 0; i < Math.ceil(this.movies.length / size); i++){
                        this.moviesByPages[i] = this.movies.slice((i*size), (i*size) + size)
                    }
                });
        },
        getMovieById(id) {
            fetch(`http://localhost:3000/docs?id=${id}`)
                .then((response) => {
                    console.log(2)
                    return response.json();
                })
                .then((data) => {
                    this.currentMovie = data[0]
                    console.log(this.currentMovie)
                });
        }
    }
})