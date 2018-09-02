/* eslint-disable-next-line func-names */
module.exports = function() {
  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js(x)|vue)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      });
    }
  });
};
