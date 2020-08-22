<template>
  <div>
    <q-img
      :src="image"
      class="full-width q-mb-lg"
    />

    <p
      class="ellipsis-2-lines text-h6 display-block max-title-height"
      :class="{
        'text-center': centerText,
      }"
    >
      {{ title }}
    </p>

    <p
      class="text-justify"
    >
      {{ abstract }}
    </p>

    <div class="row justify-between">
      <q-btn
        label="Ler mais"
        color="primary"
        flat
        no-caps
        padding="none"
        :to="`/blog/${id}/${formatTitle(title)}`"
        exact
      />

      <span class="op-50">
        Publicado em {{ publishDate | moment('DD/MM/YYYY') }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    abstract: {
      type: String,
      default: '',
    },
    publishDate: {
      type: String,
      default: '',
    },
    centerText: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    formatTitle(title) {
      return title.split(' ').map((t) => t.toLowerCase()).join('-');
    },
  },
};
</script>

<style lang="scss" scoped>
.max-title-height {
  height: 64px;
}
</style>
