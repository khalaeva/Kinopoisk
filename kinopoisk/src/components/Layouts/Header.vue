<template>
    <div class="header">
        <router-link :to="{ name: 'home'}" @click="mainStore.setMovies(0)">
            <p class="site_name">Film Online</p>
        </router-link>
        <SearchBar class="search"/>
        <div class="star">
            <router-link :to="{name: 'favourite'}">
                <HeartFilled class="icon"/>
                <span class="text_icon">Избранное</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import SearchBar from '../SearchBar.vue'
import { HeartFilled } from '@ant-design/icons-vue';
import { useMainStore } from '../../store/MainStore';

const mainStore = useMainStore()
</script>

<style lang="scss" scoped>
.site_name {
    align-self: start;
}
.search, .star{
    justify-self: end; 
    align-self: center
}
.text_icon {
    margin-left: 6px;
    color: white;
    font-size: 30px;
}
.icon {
    color:white; 
    font-size: 30px;
}
.header {
    margin: 0 100px 50px 100px;
    display: grid;
    grid-template-columns: minmax(400px, 1fr) 1fr minmax(300px, 1fr);
    grid-column-gap: 20px;
}
p {
    justify-self: start;
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 0;
}
</style>
