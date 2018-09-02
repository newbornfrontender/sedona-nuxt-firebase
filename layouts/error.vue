<template>
  <section>
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Ошибка</h1>
    <nuxt-link to="/">Главная</nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
