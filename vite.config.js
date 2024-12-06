import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/socket.io': {
          target: env.VITE_URL_BACKEND,
          ws: true,
        },
      },
    },
  };
});
