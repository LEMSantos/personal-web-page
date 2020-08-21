<template>
  <q-page>
    <page-section
      title="Portfólio"
      center-title
    >
      <div
        v-if="loadingPortfolio"
        class="relative-position flex flex-center q-py-xl"
      >
        <q-spinner-grid
          color="primary"
          size="50px"
          class="q-my-xl"
        />
      </div>

      <div
        v-else
        class="row q-pt-xl q-col-gutter-xl items-stretch"
      >
        <a
          v-for="repo in repos"
          :key="repo.id"
          class="col-md-6 col-xs-12 cursor-default"
          :href="repo.html_url"
          target="_blank"
        >
          <q-card
            class="full-height cursor-pointer text-black"
          >
            <q-card-section class="fit" horizontal>
              <q-img
                class="col-5"
                :src="getImage(repo)"
              />

              <q-card-section class="column justify-between">
                <div>
                  <p class="text-weight-bold text-h6">
                    {{ repo.name }}
                  </p>

                  <p class="text-justify">
                    {{ repo.description }}
                  </p>
                </div>

                <div class="q-mt-md q-px-md self-end">
                  <q-space />

                  <q-icon
                    name="fab fa-python"
                    size="30px"
                    class="python-icon"
                  >
                    <q-tooltip>
                      Python
                    </q-tooltip>
                  </q-icon>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </a>

        <div
          class="col-12"
          :class="{
            'flex flex-center': !$q.screen.gt.sm,
          }"
        >
          <q-btn
            type="a"
            href="https://github.com/LEMSantos?tab=repositories"
            target="_blank"
            color="primary"
            label="Ver mais projetos"
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
import axios from 'axios';

export default {
  components: {
    PageSection,
  },

  data() {
    return {
      repos: [],
      loadingPortfolio: false,
    };
  },

  mounted() {
    this.loadingPortfolio = true;

    axios.get('https://api.github.com/users/lemsantos/repos')
      .then((response) => {
        const repos = response.data.filter(
          (elem) => elem.language === 'Python' && !elem.fork,
        );
        this.repos = repos.slice(0, 4);
      })
      .finally(() => {
        this.loadingPortfolio = false;
      });
  },

  methods: {
    getImage(repo) {
      return `https://raw.githubusercontent.com/LEMSantos/${repo.name}/master/main-image.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
.python-icon {
  color: #456E9C;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}

a {
  text-decoration: none;
}
</style>
