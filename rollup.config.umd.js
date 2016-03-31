import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/arithmetic.umd.js';
config.moduleName = 'Arithmetic';

export default config;
