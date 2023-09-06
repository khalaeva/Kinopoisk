import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: [],
        movies: []
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
        }
    }
})