<template>
    <div class="components-input-demo-presuffix">
        <a-input 
            size="large"
            class="input_search" 
            v-model:value="filmName" placeholder="Поиск кино" 
            @focus="focused = true" 
            @blur="focused = true"
            style="border-radius: 20px;"
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
                <li v-for="movie in filteredList().slice(0, 3)">{{ movie.name }}</li>
            </ul>
            <button class="more_results" v-if="filteredList().slice(3).length"> Показать еще {{ filteredList().slice(3).length }}</button>
            <div class="search_error" v-if="filmName&&!filteredList().length">
                <p>Нет результатов!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { SearchOutlined } from '@ant-design/icons-vue';
    import { useMainStore } from '@/store/MainStore'
    import { ref } from 'vue';

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
.input_search{
    width: 500px;
}
.result{
    background-color: rgb(18, 18, 22, 0.8);
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 1;
    width: 500px; 
    padding: 15px 0 15px 0;
    border-radius: 20px;
}
ul{
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
}
li{
    padding: 5px 0 15px 0 ;
    font-size: 18px;
    color: white;
}
.more_results{
    font-size: 18px;
    color: white;
    background-color: rgb(18, 18, 22, 0);
}
.more_results:active{
    border: 0;
}
</style>