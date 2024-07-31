<script>
import FilmCard from "@/components/FilmCard.vue";
import Pagination from "@/components/Pagination.vue";
import MoviesPlaceholdersSection from "@/components/MoviesPlaceholdersSection.vue";

export default {
  components: {
    FilmCard,
    Pagination,
    MoviesPlaceholdersSection
  },
  data(){
    return {
      films: [],
      totalPage: 0,
      currentPage: 1,
      currentUrl: String,
      isFilmsReceived: false,
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
          'X-API-KEY': '2DZ3KR5-RJ3M5F9-P41VECJ-6PFVYC8',
        },
      };

      return new Promise((resolve, reject) => {
        this.isFilmsReceived = false;
        resolve();
      })
          .then(() => fetch(this.currentUrl, options))
          .then(response => response.json())
          .then(object => {
            this.films = object.docs;
          })
          .then(() => this.isFilmsReceived = true)
          .catch(err => console.error(err));
    },
  },
};
</script>

<template>
<section>
  <MoviesPlaceholdersSection
    v-if="!this.isFilmsReceived"
  />
  <div id="all-movies-container">
    <FilmCard
        v-if="this.isFilmsReceived"
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
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
}
</style>