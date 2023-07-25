import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        moviesByPages: []
    }),
    actions: {
        getMoviesFromAPI() {
            fetch('http://localhost:3000/docs')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let movies = data
                    let size = 20
                    for (let i = 0; i < Math.ceil(movies.length / size); i++){
                        this.moviesByPages[i] = movies.slice((i*size), (i*size) + size)
                    }
                });
        }
    }
})