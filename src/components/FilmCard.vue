<script>
export default {
  props: {
    film: Object,
  },
};
</script>

<template>
  <router-link class="film-link" :to="'film/' + this.film.id">
    <div class="film-card">
      <div class="poster-container">
        <div class="poster-body">
          <div class="rating-container">
            <p class="rating">{{this.film.ageRating || 0}}+</p>
          </div>
          <img :src="this.film.poster.previewUrl" alt="">
        </div>
      </div>
      <div class="name-container">
        <h3>{{this.film.name}}</h3>
        <p class="year">{{this.film.year}}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.film-link{
  width: 100%;
}
.film-card{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.poster-container{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow-y: hidden;
}
.poster-body{
  width: 100%;
  height: 100%;
  transition: 0.4s;
  transform: scale(0.94);
}
.film-card:hover .poster-body{
  transform: scale(1);
}
.poster-body > img{
  width: 100%;
  height: 100%;
  border-radius: 16px;
}
.rating-container{
  position: absolute;
  top: 8px;
  left: 8px;

  width: 28px;
  height: 24px;
  border-radius: 12px;
  background-color: rgb(20, 20, 20);

  display: flex;
  justify-content: center;
  align-items: center;
}
.rating{
  color: #e1e3e6;
  font-size: 14px;
}

.name-container{
  width: 100%;
  height: 38px;
}
.name-container > h3{
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.year{
  font-size: 14px;
}
</style>