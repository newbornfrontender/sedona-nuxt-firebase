module.exports = {
  head: {
    title: 'Седона',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Седона',
      },
    ],
  },
  loading: {
    color: '#000',
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js(x)|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      }
    },
  },
};
