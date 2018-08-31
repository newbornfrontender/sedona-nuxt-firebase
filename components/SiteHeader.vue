<template>
  <div>
    <header>
      <ul
        :class="[
          block[0],
          block[1],
        ]"
      >
        <li
          :class="[
            `${block[0]}__${elem[0]}`,
            `${block[1]}__${elem[0]}`,
          ]"
        >
          <nuxt-link
            :class="[
              `${block[0]}__${elem[1]}`,
              mod[0] ? `${block[0]}__${elem[1]}--${mod[0]}` : '',
            ]"
            to="/"
          >Home page</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Array,
      default: () => [],
    },
    elem: {
      type: Array,
      default: () => [],
    },
    mod: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
