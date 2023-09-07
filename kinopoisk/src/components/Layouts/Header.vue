<template>
    <div class="header">
        <div class="grid">
            <p class="site_name">Film Online</p>
            <SearchBar class="search"/>
            <div class="star">
                <StarFilled class="icon"/>
                <span class="text_icon">Избранное</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SearchBar from '../SearchBar.vue'
    import { StarFilled } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.site_name {
    align-self: center;
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
.grid {
    margin: 0 100px 0 100px;
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

@media (max-width: 1350px) { 
    .grid{
        display: flex;
        justify-content: center;
    }
    .site_name {
        display: none;
    }
    .text_icon {
        display: none;
    }

}
</style>
