import typescript from 'rollup-plugin-typescript2';
// import { terser } from 'rollup-plugin-terser';
// import rollupReplace from 'rollup-plugin-replace';
// import fileSize from 'rollup-plugin-filesize';

const createTsPlugin = ({ declaration = true, target } = {}) =>
  typescript({
    clean: true,
    tsconfig: "tsconfig.json",
    tsconfigOverride: {
      compilerOptions: {
        declaration,
        ...(target && { target }),
      },
    },
  });

const createNpmConfig = ({ input, output }) => ({
  input,
  output,
  preserveModules: true,
  plugins: [createTsPlugin()],
});



export default [
  createNpmConfig({
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
    ],
  }),
];
