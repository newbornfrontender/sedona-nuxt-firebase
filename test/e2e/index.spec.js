import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

let nuxt = null;

test.before('Инициализация Nuxt и запуск сервера', async () => {
  const rootDir = resolve(__dirname, '..');
  let config = {};
  try {
    /* eslint-disable-next-line global-require, import/no-dynamic-require */
    config = require(resolve(rootDir, 'nuxt.config.js'));
    /* eslint-disable-next-line no-empty */
  } catch (e) {}
  config.rootDir = rootDir;
  config.dev = false;
  config.mode = 'universal';
  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  nuxt.listen(4000, 'localhost');
});

test('Проверка разметки на главной странице', async (t) => {
  const context = {};
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes('<div class="test">Главная</div>'));
});

test.after('Закрытие сервера', () => {
  nuxt.close();
});
