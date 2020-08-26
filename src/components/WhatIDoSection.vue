<template>
  <div
    class="column"
    :class="$q.screen.gt.sm ? 'text-justify' : 'text-center'"
  >
    <div>
      <q-icon
        v-for="(icon, index) in icons"
        :key="index"
        :name="icon.name"
        size="30px"
        class="icon-height"
        :class="index < icons.length - 1 ? 'q-mr-md' : ''"
        :style="icon.color ? `color: ${icon.color}` : ''"
      />
    </div>

    <p class="text-weight-bold text-subtitle1">
      {{ title }}
    </p>

    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    icons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-height {
  height: 30px;
  width: auto;
  min-width: 30px;
}
</style>
