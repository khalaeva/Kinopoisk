<template>
    <div class="cart">
        <router-link :to="{ name: 'movie', params: {id: movie.id} }">
            <img class="poster" alt="poster" :src="movie.poster.url">        
        </router-link>
            <div class="icons">
                <router-link :to="{ name: 'movie', params: {id: movie.id} }">
                    <div style="margin-right: 35px;">
                        <EyeOutlined class="icon"/>
                        <p class="icon_txt">Cмотреть</p>
                    </div>
                </router-link>
                <div v-if="!liked">
                    <HeartOutlined @click="liked = !liked" class="icon"/>
                    <p class="icon_txt">Добавить</p>
                </div>
                <div v-else>
                    <HeartFilled @click="liked = !liked" class="icon"/>
                    <p class="icon_txt">Добавлено</p>
                </div>
            </div>
        <router-link :to="{ name: 'movie', params: {id: movie.id} }">
            <div class="rating">
                <p style="font-size: 33px;">{{ movie.name }} </p>
                <p style="font-size: 18px;">{{ movie.year }} · {{ movie.movieLength }} мин</p>
                <p style="font-size: 15px;">KP: {{ movie.rating.kp.toFixed(1) }} &nbsp; IMBD: {{ movie.rating.imdb }}</p>
            </div>
            <div class="rating__small_screen">
                <p style="font-size: 20px; margin-bottom: 0">{{ movie.name }} </p>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { EyeOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

let liked = ref(false)

const props = defineProps({
    movie: {
        type: Object, 
        require: true
    }
})
</script>

<style lang="scss" scoped>
.icon_txt {
    min-width: 72px;
    opacity: 0;
}
.icon:hover {
    background-color: rgba(255, 255, 255, 0.9);
}
.icon:hover~ .icon_txt {
    opacity: 1;
}
.icons {    
    display: flex;
    justify-content: center;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 45%;
    z-index: 2;
}
.icon {
    border-radius: 100%;
    font-size: 40px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.6);
    color: rgb(29, 29, 34);
}
.rating {
    opacity: 0;
    position: absolute;
    bottom: 40px;
    left: 0;
    p {
        text-align: left;
        font-weight: 500;
        margin: 0 20px 5px 20px;
    }
} 
.cart {
    position: relative;
    margin-bottom: 50px;
    padding: 0 15px;
    width: 20%;
    min-width: 200px;
}
.poster {
    transition: 1s;
}
.cart:hover {
    cursor: pointer;
    .poster {
        opacity: 0.4;
        transform: scale(1.07) translateY(-7px); 
    }
    .rating {
        opacity: 1;
    }
    .icons {
        opacity: 1;
    }
}

.rating__small_screen {
    display: none;
}

@media (max-width: 1350px) { 
    .cart:hover {
        cursor: pointer;
        .poster {
            opacity: 0.4;
            transform: scale(1.07) translateY(-7px); 
        }
        .rating {
            opacity: 0;
        }
    }
    .rating__small_screen {
        display: block;
    }
}
</style>