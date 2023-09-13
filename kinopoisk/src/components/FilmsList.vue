<template>
    <section class="films-list">
        <div class="sort">
            <span>Сортировка:</span>
            <a-dropdown v-for="param in sort">
                <a class="ant-dropdown-link" @click.prevent>
                {{ param.name }}
                <DownOutlined />
                </a>
                <template #overlay>
                <a-menu>
                    <a-menu-item v-for="(i, index) in param.params" :key="index">
                    <a  @click="sortFilms(i)">
                        {{ i }}
                    </a>
                    </a-menu-item>
                </a-menu>
                </template>
            </a-dropdown>
        </div>
        <div class="movie-cart">
            <MovieCart v-for="movie of mainStore.moviesByPages[numberPage - 1]"  :movie="movie"/>
        </div>
        <div class="pagination">
            <a-pagination v-model:current="numberPage" @change="onChange" :pageSize="20" :total="mainStore.moviesByPages.length * 20" :show-size-changer="false"/>
        </div>
    </section>
</template>

<script setup>
import { useMainStore } from '@/store/MainStore'
import { onMounted, ref } from 'vue'
import MovieCart from './Views/MovieCart.vue'
import { DownOutlined } from '@ant-design/icons-vue';

const mainStore = useMainStore()
const numberPage = ref(1)
const sort = ref([
    {
        name: 'Год', 
        params: ['По Убыванию', 'По Возрастанию']
    },
    {
        name: 'Рейтинг', 
        params: ['Сначала Лучшие', 'Сначала Худшие']
    },
    {
        name: 'Хронометраж', 
        params: ['Сначала Длинные', 'Сначала Короткие']
    }
])

onMounted (() => {
    mainStore.getMoviesFromAPI()
})

function sortFilms(i) {
    console.log(i)
}
function onChange() {
    window.scrollTo(0,0)
}
</script>

<style lang="scss" scoped>
.sort {
    width: 600px;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-bottom: 30px;
    font-size: 20px;
    color: white;
}
a{
    color: white;
}
a:hover {
    color: gray;
}
.films-list {
    margin: 50px 3% 50px 3%;
}
.movie-cart {
    display: flex;
    flex-wrap: wrap;
}
</style>