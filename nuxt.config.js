module.exports = {
  head: {
    title: 'nuxt-vuetify',
    meta: [{
      charset: 'utf-8',
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt project with Vuetify',
    }],
  },
  loading: {
    color: '#3B8070',
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(jsx?|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      };
    },
    extend(config) {
      config.module.rules.find(({
        loader,
      }) => loader === 'vue-loader').options.cssModules = {
        localIdentName: '[name]_[local]_[hash:base64:5]',
        camelCase: 'only',
      };
    },
  },
};
