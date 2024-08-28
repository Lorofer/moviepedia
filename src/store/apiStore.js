import { defineStore } from 'pinia';

export const useApiStore = defineStore('apiStore', {
  state: () => ({
    urlOrigin: new URL('https://api.kinopoisk.dev/v1.4'),
    apiKey: '2DZ3KR5-RJ3M5F9-P41VECJ-6PFVYC8'
  }),
})
