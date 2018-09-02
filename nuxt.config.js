module.exports = {
  // mode: 'spa',
  analyze: true,
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
    // '~/modules/vue-loader',
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
};
