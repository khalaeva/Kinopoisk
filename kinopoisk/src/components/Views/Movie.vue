<template>
    <div class="current_movie">
        <img class="poster" alt="poster" :src="mainStore.currentMovie.poster.url">
        <div class="describe">
            <div class="name">
                <p class="name__txt">{{ mainStore.currentMovie.name }} ({{ mainStore.currentMovie.year }})</p>
                <button v-if="!mainStore.currentMovie.liked" class="name__btn" @click="mainStore.like()">
                    <HeartOutlined class="name__icon"/>
                    Добавить
                </button>
                <button v-else class="name__btn" @click="mainStore.unlike()">
                    <HeartFilled class="name__icon"/>
                    Добавлено
                </button>
            </div>
            <div class="score">
                <div class="score_sites">
                    <p class="score_sites_num">{{ mainStore.currentMovie.rating.kp.toFixed(1) }}</p>
                    <p>kinopoisk.ru</p>
                </div>
                <div class="score_sites">
                    <p class="score_sites_num">{{ mainStore.currentMovie.rating.imdb }}</p>
                    <p>imbd.com</p>
                </div>
                <div class="my_score">
                    <p v-if="!mainStore.currentMovie.myRating">-</p>
                    <p v-else class="score_sites_num">{{ mainStore.currentMovie.myRating }}</p>
                    <p>Моя оценка</p>
                </div>
                <div class="separator"></div>
                <div class="rate_movie">
                    <p class="rate_movie__txt">Оцените фильм</p>
                    <div class="rate_movie__num">
                        <p class="rate_movie__numbers" style="" v-for="num in 10" @click="mainStore.rateMovie(num)">{{ num }}</p>
                    </div>
                </div>
            </div>
            <p class="description">{{ mainStore.currentMovie.description }} </p>
        </div>
    </div>
    <RecommendMovie :movie="mainStore.currentMovie"/>
</template>

<script setup>
import { HeartFilled, HeartOutlined } from '@ant-design/icons-vue';
import { useMainStore } from '@/store/MainStore'
import RecommendMovie from './RecommendMovie.vue';

const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
.rate_movie__numbers:hover {
    color: rgb(62, 68, 77);
    cursor: pointer;
}
.rate_movie__numbers {
    margin-bottom: 0; 
}
.description { 
    font-size: 18px;
    text-align: left;
}
.rate_movie {
    min-width: 300px;
    &__num {
        font-size: 33px;
        display: flex;
        justify-content: space-between;
    }
    &__txt {
        font-size: 18px;
        margin-bottom: 0;
    }
}
.separator {
    width: 1px;
    height: 55px;
    background-color: rgb(92, 92, 104);;
}
.score {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 60px 40px;
}
.score_sites_num {
    font-size: 30px;
    margin-bottom: 0%;
}
.current_movie {
    margin: 10px 100px 10px 100px;
    padding: 20px;
    display: grid; 
    grid-column-gap: 20px;
    grid-template-columns: 400px 1fr;
}
.describe {
    padding-left: 50px;
    min-width: 800px;
}
.name {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    &__txt{
        margin-bottom: 0;
        text-align: left;
        font-size: 50px;
        font-weight: 450;
    }
    &__icon {
        color: black;
        font-size: 30px;
        padding-right: 7px;
    }
    &__btn {
        margin-top: 3px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        height: 50px;
    }
}
</style>