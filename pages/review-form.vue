<template>
  <section>
    <div>{{ msg }}</div>
    <!-- <div>Current MQ: {{ $mq }}</div> -->
    <!-- <div v-if="$mq === 'sm'">SM with "$mq === 'sm'"</div> -->
    <mq-layout mq="xs">
      <span> Display on md and larger </span>
    </mq-layout>
    <!-- <% if(debug) { %>
      <p class="description">Debug</p>
    <% } %> -->
  </section>
</template>

<script>
export default {
  data: () => ({
    msg: 'Форма отзыва',
  }),
  // <% if(process.browser) { %>
  // <% }, %>
};
</script>
