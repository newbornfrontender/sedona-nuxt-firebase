<template>
  <section>
    <site-header
      :block="['list', 'nav-list']"
      :elem="['item', 'link']"
      :mod="{ 'active': isActive }"
    />
    <site-main />
  </section>
</template>

<script>
/* eslint-disable-next-line import/no-unresolved */
import SiteHeader from '~/components/SiteHeader.vue';
/* eslint-disable-next-line import/no-unresolved */
import SiteMain from '~/components/SiteMain.vue';

export default {
  components: {
    SiteHeader,
    SiteMain,
  },
  data: () => ({
    isActive: true,
  }),
};
</script>
