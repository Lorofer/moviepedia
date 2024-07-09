<template>
  <div class="card-container">
    <div class="image-container">
      <img :src="require('@/assets/img/' + this.imageFileName)" alt="">
    </div>
    <div class="text-container">
      <h2>{{nameOfCollection}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
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

.card-container img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (max-width: 1140px) {
  .card-container .image-container{
    width: 40%;
    min-width: 250px;
    height: 300px;
  }
}

@media (max-width: 1140px) {
  .card-container .text-container{
    width: 364px;
    margin: auto;
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
</style>