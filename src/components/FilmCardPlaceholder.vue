<script>
export default {
  name: "FilmCardPlaceholder"
}
</script>

<template>
<div class="film-placeholder">
  <div class="poster-placeholder-container">
    <div class="poster-placeholder"></div>
  </div>
  <div class="film-data">
    <div class="film-name-placeholder"></div>
    <div class="film-year-placeholder"></div>
  </div>
</div>
</template>

<style scoped>
.film-placeholder{
  width: 100%;
  aspect-ratio: 0.58;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.poster-placeholder-container{
  width: 100%;
  flex: 1;
}
.poster-placeholder{
  width: 100%;
  height: 100%;
  transition: 0.4s;
  transform: scale(0.94);
  border-radius: 16px;
  background-color: #d7d7d7;
}
.film-data{
  width: 95%;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.film-name-placeholder{
  width: 100%;
  height: 18px;
  border-radius: 6px;
  background-color: #d7d7d7;
}
.film-year-placeholder{
  width: 32px;
  height: 14px;
  border-radius: 6px;
  background-color: #d7d7d7;
}
</style>