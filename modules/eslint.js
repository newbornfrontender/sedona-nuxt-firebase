// /* eslint-disable-next-line func-names */
// module.exports = function() {
//   this.nuxt.hook('build', async (builder) => {
//     /* eslint-disable-next-line no-unused-vars */
//     builder.hook('compile', ({ compiler }) => {
//       this.extendBuild((config, ctx) => {
//         if (ctx.isDev && ctx.isClient) {
//           config.module.rules.push({
//             enforce: 'pre',
//             test: /\.(js(x)|vue)$/,
//             use: 'eslint-loader',
//             exclude: /node_modules/,
//           });
//         }
//       });
//     });
//   });
// };

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
