<template>
  <section>
    <site-header />
    <site-main />
    <site-footer />
  </section>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteMain from '~/components/SiteMain.vue';
import SiteFooter from '~/components/SiteFooter.vue';

export default {
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>
