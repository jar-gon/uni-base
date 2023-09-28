import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import vitePluginGeneratePages from './bin';

export default defineConfig({
  plugins: [uni(), vitePluginGeneratePages()],
});
