import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig(({ command }) => {
    export default defineConfig(() => {

    const config = {
        plugins: [react()],
        base: "/",
        assetsInclude: ['**/*.md']
    };

    // if (command !== "serve") {
    //     config.base = "/idl/";
    // }

    return config;
});