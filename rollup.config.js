import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'hackedPrank',
      sourcemap: true
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
}; 