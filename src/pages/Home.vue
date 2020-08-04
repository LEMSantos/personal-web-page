<template>
  <q-page>
    <page-section
      hide-header
      class="row"
      :class="{
        'q-gutter-x-lg': $q.screen.gt.sm,
      }"
    >
      <div class="col-md col-xs-12">
        <p
          class="text-weight-bold"
          :class="{
            'text-h3 q-mb-lg': $q.screen.gt.sm,
            'text-h4 q-mb-xs text-center': !$q.screen.gt.sm,
          }"
        >
          Lucas Eliaquim
        </p>

        <p
          :class="$q.screen.gt.sm ? 'text-h5 q-mb-xl' : 'text-subtitle1 q-mb-lg text-center'"
        >
          Cientista de Dados
        </p>

        <div class="flex flex-center">
          <q-img
            v-if="!$q.screen.gt.sm"
            src="~assets/home-image.png"
            spinner-color="white"
            class="home-image-size"
          />
        </div>

        <p
          v-if="$q.screen.gt.sm"
          class="text-justify q-mb-xl text-subtitle1"
        >
          Sou estudante de Engenharia da Computação na UNIVASF, fascinado pelas áreas de Data
          Science e Data Engineering, além de gostar de qualquer coisa relacionada com Inteligência
          Artificial. Almejo alcançar altas posições na área que gosto e viajar pelo mundo inteiro.
          Tento ser bem humorado e as vezes enérgico, mas gosto de discutir quando o assunto é R
          vs Python ou como a Inteligência Artificial vai dominar o mundo.
        </p>

        <p
          v-else
          class="text-center text-subtitle1"
        >
          Estudante de Engenharia da Computação na UNIVASF, fascinado pelas áreas de Data Science
          e Data Engineering, além de gostar de qualquer coisa relacionada com
          Inteligência Artificial.
        </p>

        <div
          v-if="$q.screen.gt.sm"
        >
          <q-btn
            color="primary"
            label="Ver o Portfólio"
            icon="fas fa-code"
            text-color="white"
            class="q-py-xs q-mr-md"
            unelevated
            no-caps
          />

          <q-btn
            color="secondary"
            label="Ver o Currículo"
            icon="fas fa-file-alt"
            text-color="white"
            class="q-py-xs"
            unelevated
            no-caps
          />
        </div>

        <div
          v-else
          class="row justify-center"
        >
          <q-btn
            v-for="(socialMedia, index) in socialMedias"
            :key="index"
            type="a"
            target="_blank"
            :href="socialMedia.link"
            color="primary"
            class="q-mr-md"
            outline
            round
          >
            <q-icon
              :name="socialMedia.icon"
              color="black"
            />
          </q-btn>
        </div>
      </div>

      <div
        v-if="$q.screen.gt.sm"
        class="col-auto"
      >
        <q-img
          src="~assets/home-image.png"
          spinner-color="white"
          class="home-image-size"
        />
      </div>
    </page-section>

    <page-section
      title="O que eu faço"
      :center-title="!$q.screen.gt.sm"
    >
      <div
        class="row q-col-gutter-x-lg q-col-gutter-y-xl q-mt-xs"
      >
        <what-i-do-section
          title="Python & Flask"
          :icons="[
            {
              name: 'fab fa-python',
              color: '#456E9C',
            },
            {
              name: `img:${require('src/assets/flask-icon.png')}`,
              color: '#64B687',
            },
          ]"
          class="col-md-3 col-sm-6 col-xs-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </what-i-do-section>
        <what-i-do-section
          title="JavaScript, Html & Css"
          :icons="[
            {
              name: 'fab fa-js-square',
              color: '#F1DE4F',
            },
            {
              name: 'fab fa-html5',
              color: '#DE6E3C',
            },
            {
              name: 'fab fa-css3-alt',
              color: '#53A7DC',
            },
          ]"
          class="col-md-3 col-sm-6 col-xs-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </what-i-do-section>
        <what-i-do-section
          title="Docker"
          :icons="[
            {
              name: 'fab fa-docker',
              color: '#1488C6',
            },
          ]"
          class="col-md-3 col-sm-6 col-xs-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </what-i-do-section>
        <what-i-do-section
          title="Vue & Quasar"
          :icons="[
            {
              name: 'fab fa-vuejs',
              color: '#64B687',
            },
            {
              name: `img:${require('src/assets/quasar-logo.png')}`,
              color: '#64B687',
            },
          ]"
          class="col-md-3 col-sm-6 col-xs-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </what-i-do-section>
      </div>
    </page-section>

    <page-section
      title="Últimos Posts do Blog"
      :center-title="!$q.screen.gt.sm"
    >
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
        v-else-if="!latestBlogPosts.length"
        class="column items-center q-gutter-y-md q-pt-xl"
      >
        <q-icon
          :name="`img:${require('src/assets/octocat.png')}`"
          size="250px"
        />

        <span
          class="text-h5 text-weight-bold op-80 q-mb-xl"
        >
          Não há nenhum post ainda.
        </span>
      </div>

      <div
        v-else
        class="row q-col-gutter-xl q-mt-xs q-mb-xl"
      >
        <blog-post
          v-for="(post, index) in latestBlogPosts"
          :key="index"
          v-bind="post"
          :center-text="$q.screen.lt.sm"
          class="col-md-4 col-sm-6 col-xs-12"
        />

        <div
          v-if="!$q.screen.lt.md"
          class="col-12"
        >
          <q-btn
              color="primary"
              label="Ver o Blog"
              icon="fas fa-blog"
              text-color="white"
              class="q-py-xs q-mr-md"
              unelevated
              no-caps
            />
        </div>
      </div>
    </page-section>
  </q-page>
</template>

<script>
import PageSection from 'components/PageSection.vue';
import BlogPost from 'components/BlogPost.vue';
import WhatIDoSection from 'components/WhatIDoSection.vue';
import services from '../services';

export default {
  name: 'HomePage',

  components: {
    PageSection,
    BlogPost,
    WhatIDoSection,
  },

  data() {
    return {
      /* eslint-disable global-require */
      latestBlogPosts: [],
      socialMedias: [
        {
          icon: 'fab fa-github-alt',
          link: 'https://github.com/LEMSantos',
        },
        {
          icon: 'fab fa-linkedin-in',
          link: 'https://www.linkedin.com/in/lucas-eliaquim-1a7675181/',
        },
        {
          icon: 'fas fa-envelope',
          link: 'mailto:lucas_m-santos@hotmail.com',
        },
      ],
      loadingBlogPosts: false,
    };
  },

  mounted() {
    this.loadingBlogPosts = true;

    this.getLatestBlogPosts()
      .then((data) => {
        this.latestBlogPosts = data;
      })
      .catch(() => {})
      .finally(() => {
        this.loadingBlogPosts = false;
      });
  },

  methods: {
    ...services,
  },
};
</script>

<style lang="scss">
.home-image-size {
  max-width: 400px;
  width: 50vw;
}
</style>
