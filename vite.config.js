import { defineConfig } from 'vite';

// This removes the absolute path from the generated files so that we can host on a subpath
export default defineConfig({
  base: '',
});
