<template>
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
</template>

<script setup>
import { ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { useMainStore } from '@/store/MainStore'

const mainStore = useMainStore()
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

function sortFilms(i) {
    if (i === 'По Убыванию') {
        mainStore.moviesByYearsOld()
    }
    else if (i === 'По Возрастанию') {
        mainStore.moviesByYearsNew()
    }
    else if (i === 'Сначала Лучшие') {
        mainStore.moviesByRatingBest()
    }
    else if (i === 'Сначала Худшие') {
        mainStore.moviesByRatingWorst()
    }
    else if (i === 'Сначала Длинные') {
        mainStore.moviesByLenghtLong()
    }
    else {
        mainStore.moviesByLenghtShort()
    }
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
</style>
