import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: [
    {
      file: path.resolve(__dirname, './build/lib/index.js'),
      format: 'cjs'
    },
    {
      file: path.resolve(__dirname, './build/es/index.js'),
      format: 'es'
    }
  ],
  external: ['react', 'antd', 'prop-types'],
  plugins: [
    clear({
      targets: ['build']
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**' // 把cjs转化为es
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 versions', 'safari >= 7']
            }
          }
        ],
        'stage-2',
        'react'
      ],
      plugins: ['external-helpers']
    })
  ]
};
