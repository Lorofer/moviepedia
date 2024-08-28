import { defineStore } from 'pinia';
import { useApiStore } from "@/store/apiStore";

const defaultGenres = new Set([
    '!документальный', '!короткометражка',
    '!музыка', '!игра', '!новости',
    '!концерт', '!реальное ТВ', '!мюзикл'
]);
export const useAllMoviesStore = defineStore('allMoviesStore', {
    state: () => ({
        currentPage: 1,
        minRating: undefined,
        maxRating: undefined,
        selectedGenres: new Set(),

        movies: [],
        loader: true,
    }),
    getters: {
        URL: (state) => {
            const apiStore = useApiStore();

            let url = new URL('/v1.4/movie', apiStore.urlOrigin);
            const params = {
                page: state.currentPage,
                limit: 50,
                notNullFields: [
                    'name', 'premiere.russia', 'poster.url',
                ],
                sortField: 'rating.kp',
                sortType: -1,
                type: [
                    'movie', 'cartoon',
                ],
                'rating.kp': `${state.minRating || 1}-${state.maxRating || 10}`,
                'genres.name': Array.from(state.selectedGenres).length === 0 ? Array.from(defaultGenres) : Array.from(state.selectedGenres),
            };

            for(let param of Object.entries(params)){
                if(Array.isArray(param[1])){
                    for(let value of param[1]){
                        url.searchParams.append(param[0], value);
                    }
                }
                else{
                    url.searchParams.set(param[0], param[1].toString());
                }
            }

            return url.toString();
        }
    },
    actions: {
        async getMovies(){
            this.loader = true;
            const apiStore = useApiStore();

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': apiStore.apiKey,
                },
            };

            const response = await fetch(this.URL, options);
            const data = await response.json();
            this.movies = data.docs;

            this.loader = false;
        },
    },
});