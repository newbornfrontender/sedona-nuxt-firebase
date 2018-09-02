<template>
  <section>
    <div>{{ msg }}</div>
    <div :class="$style.testStyle">Test</div>
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'Фото и видео',
  }),
  head() {
    return {
      title: this.msg,
      meta: [
        {
          hid: 'gallery-description',
          name: 'description',
          content: this.msg,
        },
      ],
    };
  },
};
</script>

<style module>
.testStyle {
  color: red;
}
</style>
