import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "umd",
    name: 'index.min.js'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}