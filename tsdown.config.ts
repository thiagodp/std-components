import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./index.ts'],
  platform: 'browser',
  clean: false,
  outDir: "./",

  // format: {
  //   esm: {
  //     target: ['es2015'],
  //   }
  // },
} )