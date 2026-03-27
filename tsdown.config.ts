import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./index.ts'],
  platform: 'browser',
//   outDir: "./",
  // format: {
  //   esm: {
  //     target: ['es2015'],
  //   }
  // },
} )