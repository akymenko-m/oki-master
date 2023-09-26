import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), svgr()],
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY),
      'process.env.MAP_URL': JSON.stringify(env.MAP_URL),
    },
    plugins: [react(), svgr()],
  };
});
