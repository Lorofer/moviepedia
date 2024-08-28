<script>
import {useApiStore} from "@/store/apiStore";

export default {
  props: {
    id: String,
  },
  data(){
    return {
      film: {},

      apiStore: useApiStore(),
    }
  },
  mounted(){
    this.getFilm(this.id)
  },
  methods: {
    getFilm(filmID) {
      let url = `https://api.kinopoisk.dev/v1.4/movie/${filmID}`

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': this.apiStore.apiKey,
        },
      };
      //
      // 'X-API-KEY': '2DZ3KR5-RJ3M5F9-P41VECJ-6PFVYC8',

      fetch(url, options)
          .then(response => response.json())
          .then(object => {
            this.film = object;
            //console.log(this.film);
          })
          .catch(err => console.error(err));
    },
  },
};
</script>

<template>
  <section class="film-container">
    <img
        :src="this.film.poster?.previewUrl"
        alt=""
        class="poster"
    >
    <div class="film-data-container">
      <div class="main-data">
        <h1 v-if="this.film.name">{{this.film.name}}</h1>
        <p v-if="this.film.year">({{this.film.year}})</p>
        <p v-if="this.film.rating" class="rating">{{this.film.rating?.kp.toFixed(1)}}</p>
      </div>
      <div class="description-container">
        <p v-if="this.film.description">{{this.film.description}}</p>
      </div>
      <div class="additional-data">
        <p v-if="this.film.genres">Жанры: <span
            v-for="genre of this.film.genres"
            :key="genre.name"
          >{{genre.name + ' '}}</span></p>
      </div>

      <router-link class="back" to="/all-movies">назад</router-link>
    </div>
  </section>
</template>

<style scoped>
.film-container{
  display: flex;
  column-gap: 48px;
  height: calc(100vh - 128px - 40px);
}
.film-container .poster{
  height: 100%;
}

.film-data-container .main-data{
  display: flex;
  margin-bottom: 24px;
}
.film-data-container .main-data > *{
  font-size: 28px;
  font-weight: 600;
}
.film-data-container .main-data > h1{
  margin-right: 10px;
}
.film-container .rating{
  margin-left: auto;
}
.description-container{
  margin-bottom: 24px;
}
.back{
  position: absolute;
  bottom: 40px;

  width: 96px;
  height: 48px;
  border-radius: 24px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.2);

  transform: scale(1);
  transition: 0.4s;
}
.back:hover{
  transform: scale(1.05);
}
</style>