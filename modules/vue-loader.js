/* eslint-disable-next-line func-names */
module.exports = function() {
  this.extendBuild((config) => {
    const vueLoader = config.module.rules.find(
      (rule) => rule.loader === 'vue-loader',
    );

    vueLoader.options.cssModules = {
      localIdentName: '[path]-[name]--[local]__[hash:base64:5]_',
      camelCase: 'only',
    };
  });
};

// /* eslint-disable-next-line func-names */
// module.exports = function() {
//   this.nuxt.hook('build', async (builder) => {
//     builder.hook('compile', () => {
//       this.extendBuild((config) => {
//         const vueLoader = config.module.rules.find(
//           (rule) => rule.loader === 'vue-loader',
//         );

//         vueLoader.options.cssModules = {
//           localIdentName: '[path]-[name]--[local]__[hash:base64:5]_',
//           camelCase: 'only',
//         };
//       });
//     });
//   });
// };
