<template>
  <q-page>
    <div
      v-if="loadingBlogPosts"
      class="relative-position flex flex-center q-py-xl"
    >
      <q-spinner-grid
        color="primary"
        size="50px"
        class="q-my-xl"
      />
    </div>

    <div
      v-else-if="!blogPosts.length"
      class="column items-center q-gutter-y-md q-pt-xl"
    >
      <q-icon
        :name="`img:${require('src/assets/octocat.png')}`"
        size="300px"
      />

      <span
        class="text-h5 text-weight-bold op-80 q-mb-xl"
      >
        Não há nenhum post ainda.
      </span>
    </div>

    <div
      class="row q-col-gutter-xl q-mt-xs q-mb-xl"
    >
      <blog-post
        v-for="(post, index) in blogPosts"
        :key="index"
        v-bind="post"
        :publish-date="post.created_at"
        :center-text="$q.screen.lt.sm"
        class="col-md-4 col-sm-6 col-xs-12"
      />

      <div
        v-if="blogPosts.length"
        class="col-12 flex flex-center"
      >
        <q-pagination
          v-model="page"
          color="primary"
          :max="lastPage"
          :max-pages="6"
          :boundary-numbers="true"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import BlogPost from 'components/BlogPost.vue';
import services from '../services';

export default {
  components: {
    BlogPost,
  },

  data() {
    return {
      blogPosts: [],
      loadingBlogPosts: false,
      page: 1,
      lastPage: 1,
    };
  },

  mounted() {
    this.loadingBlogPosts = true;

    this.getBlogPosts(this.page)
      .then(({ data: response }) => {
        this.blogPosts = response.data;
        this.lastPage = response.last_page;
      })
      .finally(() => {
        this.loadingBlogPosts = false;
      });
  },

  watch: {
    page(newValue) {
      this.loadingBlogPosts = true;

      this.getBlogPosts(newValue)
        .then(({ data: response }) => {
          this.blogPosts = response.data;
        })
        .finally(() => {
          this.loadingBlogPosts = false;
        });
    },
  },

  methods: {
    ...services,
  },
};
</script>

<style lang="scss" scoped>

</style>
