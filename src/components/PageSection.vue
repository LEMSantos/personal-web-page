<template>
  <div class="q-my-xl">
    <template v-if="!hideHeader">
      <div
        class="text-h4 q-mb-xs text-weight-bold"
        :class="{
          'text-center': centerTitle,
          'text-h4': $q.screen.gt.sm,
          'text-h6': !$q.screen.gt.sm,
        }"
      >
        {{ title }}
      </div>

      <q-separator
        color="black"
        class="op-30"
      />
    </template>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    hideHeader: {
      type: Boolean,
      default: false,
    },

    centerTitle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
