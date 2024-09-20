<template>
  <div class="card-container">
    <div class="image-container">
      <img :src="pathToImg" alt="">
    </div>
    <div class="text-container">
      <div class="text">
        <h2>{{nameOfCollection}}</h2>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pathToImg(){
      return new URL(`/src/assets/img/${this.imageFileName}`, import.meta.url).href
    }
  },
  props: {
    'nameOfCollection': String,
    'description': String,
    'imageFileName': String,
  },
}
</script>

<style scoped>
.card-container{
  height: 100%;
  text-align: center;
  box-shadow: 0 0 32px 12px rgba(0,0,0,0.1);
  border-radius: 24px;
  cursor: pointer;
  padding: 32px;
}
@media (max-width: 1200px) {
  .card-container{
    padding: 24px;
  }
}
@media (max-width: 1140px) {
  .card-container{
    display: flex;
    padding-right: 0;
  }
}
@media (max-width: 700px) {
  .card-container {
    padding: 18px 0 18px 18px;
  }
}
@media (max-width: 576px) {
  .card-container {
    height: 230px;
  }
}

.card-container img{
  width: 100%;
  aspect-ratio: 1;
}
@media (max-width: 1140px) {
  .image-container{
    flex-basis: 40%;
    max-width: 350px;
    aspect-ratio: 1;
  }
}
@media (max-width: 700px) {
  .card-container img{
    object-fit: contain;
  }
}
@media (max-width: 576px) {
  .image-container{
    flex-basis: auto;
    max-width: none;
    height: 100%;
  }
}

@media (max-width: 1140px) {
  .text-container{
    flex-basis: 60%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text{
    max-width: 396px;
    padding: 0 16px;
  }
}
@media (max-width: 620px) {
  .card-container .text-container{
    min-width: 280px;
  }
}
@media (max-width: 576px) {
  .card-container .text-container{
    max-width: 280px;
    min-width: 220px;
  }
}
.card-container h2{
  margin: 24px 0;
  font-size: 28px;
}
.card-container p{
  margin-bottom: 24px;
  font-size: 18px;
}
@media (max-width: 1140px) {
  .card-container h2{
    margin: 0 0 24px;
    font-size: 28px;
  }
  .card-container p{
    margin-bottom: 24px;
    font-size: 18px;
  }
}
@media (max-width: 620px) {
  .card-container h2{
    margin: 0 0 18px;
    font-size: 24px;
  }
  .card-container p{
    margin-bottom: 18px;
    font-size: 16px;
  }
}
</style>