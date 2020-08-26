<template>
  <q-layout :view="$q.screen.gt.sm ? 'hhh LpR fff': 'hhh LpR fFf'">
    <q-header class="bg-main-page fira-code">
      <q-toolbar
        class="bg-main-page text-primary q-my-md"
        :class="{
          'page-left-padding page-right-padding': $q.screen.gt.sm,
          'flex flex-center': !$q.screen.gt.sm,
        }"
      >
        <div>
          <div
            class="typewriter text-h5"
          >
            LEMSantos
          </div>
        </div>

        <q-space
          v-if="$q.screen.gt.sm"
        />

        <q-tabs
          v-if="$q.screen.gt.sm"
          indicator-color="transparent"
          active-color="primary"
          class="text-weight-bold text-black"
          shrink
          stretch
        >
          <q-route-tab
            v-for="(option, index) in toolbarOptions"
            :key="index"
            :label="option.label"
            no-caps
            :to="`/${option.value}`"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.gt.sm"
      v-model="leftDrawerOpen"
      show-if-above
      :width="182"
      content-style="background-color: #f6f8fa"
      content-class="bg-main-page"
    >
      <div
        class="fit column justify-center items-center q-gutter-y-md bg-main-page"
      >
        <q-btn
          v-for="(socialMedia, index) in socialMedias"
          :key="index"
          type="a"
          target="_blank"
          :href="socialMedia.link"
          rel="noopener"
          color="primary"
          outline
          round
          :aria-label="socialMedia.name"
        >
          <q-icon
            :name="socialMedia.icon"
            color="black"
          />
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container
      :class="$q.screen.gt.sm ? 'page-right-padding' : 'q-px-md'"
      class="bg-main-page"
    >
      <router-view />

      <div class="flex flex-center q-my-xl">
        <span
          v-if="$q.screen.lt.md"
          class="text-black op-90"
        >
          Made with ❤️ by Lucas Eliaquim
        </span>
      </div>
    </q-page-container>

    <q-footer
      v-if="$q.screen.gt.sm"
      class="fira-code"
    >
      <q-toolbar
        class="q-py-lg flex flex-center"
      >
        <q-toolbar-title
          shrink
          class="q-my-md text-body2 text-weight-bold"
        >
          Made with ❤️ by Lucas Eliaquim
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-footer
      v-else
      class="bg-transparent"
    >
      <q-tabs
        switch-indicator
        dense
        indicator-color="white"
        class="bg-primary text-white tab-footer-radius shadow-2 footer-border"
      >
        <q-route-tab
          v-for="(option, index) in toolbarOptions"
          :key="index"
          :icon="tabBarIcons[index]"
          :label="option.label"
          no-caps
          :to="`/${option.value}`"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: true,
      toolbarOptions: [
        {
          label: 'Home',
          value: '',
        },
        {
          label: 'Portfólio',
          value: 'portfolio',
        },
        {
          label: 'Currículo',
          value: 'resume',
        },
        {
          label: 'Blog',
          value: 'blog',
        },
      ],
      tabBarIcons: [
        'fas fa-home',
        'fas fa-code',
        'fas fa-file-alt',
        'fas fa-blog',
      ],
      socialMedias: [
        {
          name: 'link do github',
          icon: 'fab fa-github-alt',
          link: 'https://github.com/LEMSantos',
        },
        {
          name: 'link do linkedin',
          icon: 'fab fa-linkedin-in',
          link: 'https://www.linkedin.com/in/lucas-eliaquim-1a7675181/',
        },
        {
          name: 'link do twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/LEliaquim',
        },
        {
          name: 'link do email',
          icon: 'fas fa-envelope',
          link: 'mailto:lucas_m-santos@hotmail.com',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$pageMargin: 70px;

.page-left-padding {
  padding-left: $pageMargin;
}

.page-right-padding {
  padding-right: $pageMargin;
}

.typewriter {
  overflow: hidden;
  border-right: .15em solid #1976D2;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing .75s steps(15, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #1976D2; }
}

.tab-footer-radius {
  border-radius: 10px 10px 0px 0px;
}

.bg-main-page {
  background-color: #f6f8fa !important;
}

.footer-border {
  border: 2px solid $primary;
}

div .q-drawer__content {
  background-color: #f6f8fa !important;
}
</style>
