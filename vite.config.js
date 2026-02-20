import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    envPrefix: ["VITE_", "NEXT_PUBLIC_"],
    plugins: [react()],
    server: {
        // When running 'npm run dev' directly, proxy /api to a backend server
        // When running through 'vercel dev', the API is already on the same origin
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                secure: false
            }
        }
    }
});
