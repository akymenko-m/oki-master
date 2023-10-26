import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY),
      'process.env.MAP_URL': JSON.stringify(env.MAP_URL),
      'process.env.LOGIN_PASSWORD': JSON.stringify(env.LOGIN_PASSWORD),
      'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
    },
    plugins: [react(), svgr()],
  };
});
