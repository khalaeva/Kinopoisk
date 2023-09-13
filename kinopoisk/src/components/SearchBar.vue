<template>
    <div class="components-input-demo-presuffix" style="position: relative">
        <a-input 
            size="large"
            class="input_search" 
            v-model:value="filmName" placeholder="Поиск кино" 
            @focus="focused = true" 
            @blur="focused = false"
            style="border-radius: 10px;"
        >
            <template #prefix>
                <SearchOutlined /> 
            </template>
        </a-input>
        <div 
            v-if="filmName && focused" 
            class="result"
        >
            <ul class="movie_item">
                <li v-for="movie in filteredList().slice(0, 3)">
                    <MovieCartSearch :name="movie.name" :img="movie.poster.previewUrl" :year="movie.year"/>
                </li>
            </ul>
            <button class="more_results" v-if="filteredList().slice(3).length"> Показать еще {{ filteredList().slice(3).length }}</button>
            <div v-if="filmName&&!filteredList().length">
                <p class="search_error">Нет результатов!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { SearchOutlined } from '@ant-design/icons-vue';
    import { useMainStore } from '@/store/MainStore'
    import { ref } from 'vue';
    import MovieCartSearch from './Views/MovieCartSearch.vue';

    const mainStore = useMainStore();
    const filmName = ref('');
    let focused = ref(false);

    function filteredList() {
        return mainStore.movies.filter((movie) =>
            movie.name.toLowerCase().includes(filmName.value.toLowerCase())
        );
    }
</script>

<style lang="scss" scoped>
.search_error {
    margin-top: 10px;
    color: rgb(18, 18, 22);
    font-size: 20px;
    font-weight: 500;
}
.input_search{
    width: 500px;
}
.result{
    background-color: white;
    position: absolute;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 3;
    width: 500px; 
    padding: 15px 0 15px 0;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 22px 3px rgba(34, 60, 80, 0.21);
    -moz-box-shadow: 0px 0px 22px 3px rgba(34, 60, 80, 0.21);
    box-shadow: 0px 0px 22px 3px rgba(34, 60, 80, 0.21);
}
ul{
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
}
li{
    font-size: 18px;
    color: white;
}
.more_results{
    font-size: 18px;
    color: rgb(18, 18, 22);
    background-color: white;
}
.more_results:active{
    border: 0;
}
</style>