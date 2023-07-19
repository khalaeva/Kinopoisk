import {defineStore} from 'pinia'

export const useMainStore = defineStore('MainStore', {
    state: () => ({
        movies: []
    }),
    actions: {
        getMoviesFromAPI() {
            fetch('http://localhost:3000/docs')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.movies = data;
                });
        }
    }
})