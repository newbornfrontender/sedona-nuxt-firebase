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
import SiteHeader from '~/components/SiteHeader.vue';
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
