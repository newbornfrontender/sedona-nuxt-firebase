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
    color: '#81b3d2',
  },
  modules: [
    '~/modules/eslint-loader',
    /* prettier-ignore */
    ['nuxt-mq', {
      breakpoints: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
      },
    }],
  ],
  // build: {
  //   extend(config, ctx) {
  //     if (ctx.isDev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js(x)|vue)$/,
  //         loader: 'eslint-loader',
  //         // use: 'eslint-loader',
  //         exclude: /node_modules/,
  //       });
  //     }
  //   },
  // },
};
