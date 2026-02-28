import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
// export default defineConfig(({ command }) => {
    export default defineConfig(() => {

    const config = {
        plugins: [mdx(), react()],
        base: "/",
        assetsInclude: ['**/*.md']
    };

    // if (command !== "serve") {
    //     config.base = "/idl/";
    // }

    return config;
});