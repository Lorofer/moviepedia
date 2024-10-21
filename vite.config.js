import path from 'path'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
    plugins: [vue(), vitePluginRequire({translateType: "import"})],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    base: './'
});