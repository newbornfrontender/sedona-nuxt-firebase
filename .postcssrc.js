module.exports = {
  plugins: {
    'postcss-modules': {
      getJSON: (cssFileName, json) => {
        const { writeFileSync } = require('fs');
        const { basename, resolve } = require('path');

        const cssName = basename(cssFileName, '.css');
        const jsonFileName = resolve(`./static/css-modules/${cssName}.json`);

        writeFileSync(jsonFileName, JSON.stringify(json));
      },
      generateScopedName: '[path]-[name]--[local]--[hash:base64:5]',
      camelCase: true,
    },
  },
};
