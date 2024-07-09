<script>
import FilmCard from "@/components/FilmCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    FilmCard,
    Pagination
  },
  data(){
    return {
      films: [],
      totalPage: 0,
      currentPage: 1,
      currentUrl: String,
    }
  },
  props: {
    url: String,
  },
  created() {
    this.$emit('currentPage', this.currentPage);
  },
  watch:{
    url(url){
      this.currentUrl = url;
    },
    currentUrl(){
      this.getFilms(this.currentPage);
    },
  },
  methods:{
    getFilms(pageNumber){
      if(this.currentPage !== pageNumber){
        window.location.href='#top'
        this.currentPage = pageNumber;
      }

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'SNX0QDE-0GFME71-NNKQD9V-SERWYTV',
        },
      };
      //'X-API-KEY': '2DZ3KR5-RJ3M5F9-P41VECJ-6PFVYC8',

      fetch(this.currentUrl, options)
          .then(response => response.json())
          .then(object => {
            this.films = object.docs;
            //this.$emit('filmsReceived', this.films)
          })
          .catch(err => console.error(err));
    },
  },
};
</script>

<template>
<section id="all-movies">
  <div id="all-movies-container">
    <FilmCard
        class="film-card"
        v-for="film of this.films"
        v-bind:key="film.id"
        v-bind:film="film"
    />
  </div>
  <Pagination
      v-bind:currentPage="this.currentPage"
      v-on:forth="newPage => this.$emit('forth', newPage)"
      v-on:back="newPage => this.$emit('back', newPage)"
  />
</section>
</template>

<style scoped>
#all-movies-container{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
}
.film-card{
  width: 194px
}
</style>