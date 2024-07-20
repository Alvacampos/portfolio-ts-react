import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/portfolio-ts-react/',
  server: {
    port: 8788,
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    remix({
      basename: '/portfolio-ts-react/',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
