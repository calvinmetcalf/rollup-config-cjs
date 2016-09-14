import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import autoTransform from 'rollup-plugin-auto-transform';
export default {
  plugins: [
    autoTransform(),
     globals(),
     builtins(),
     nodeResolve({ jsnext: true, main: true, browser: true }),
     commonjs({
       ignoreGlobal: true
     }),
     json()
  ]
}
