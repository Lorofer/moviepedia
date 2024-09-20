import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import AllMovies from "@/views/AllMovies.vue";
import TopMovies from "@/views/TopMovies.vue";
import Film from "@/views/Film.vue";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/all-movies',
    name: 'AllMovies',
    component: AllMovies,
  },
  {
    path: '/top-movies',
    name: 'TopMovies',
    component: TopMovies,
  },
  {
    path: '/film/:id',
    name: 'Film',
    component: Film,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
