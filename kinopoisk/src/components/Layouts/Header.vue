<template>
    <div class="header">
        <div>
            <p>Film Online</p>
            <StarFilled  style="color:white; font-size: 35px"/>
        </div>
        <SearchBar/>
    </div>
</template>

<script setup>
    import SearchBar from '../SearchBar.vue'
    import { StarFilled } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>

p {
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 0;
}
</style>
