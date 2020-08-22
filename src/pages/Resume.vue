<template>
  <q-page>
    <div
      class="row shadow-7 q-pa-md-xl q-pa-md resume q-mt-md-none q-mt-md"
    >
      <div class="col q-pa-sm-md q-pa-sm column justify-center">
        <div
          class="text-h3 text-weight-bold text-primary"
        >
          LUCAS ELIAQUIM
        </div>

        <div
          class="text-h6 op-60 text-weight-light"
        >
          Cientista de Dados
        </div>
      </div>

      <q-separator
        v-if="!$q.screen.lt.sm"
        vertical
      />

      <div
        class="col-sm-auto col-12 q-pa-md column justify-center"
      >
        <q-chip
          v-for="info in informations"
          :key="info.text"
          color="transparent"
          text-color="black"
          class="q-pa-none q-ma-none"
        >
          <q-icon
            :name="info.icon"
            class="q-mr-sm"
          />

          {{ info.text }}
        </q-chip>
      </div>

      <q-separator class="q-my-md" />

      <div class="col-12 q-pa-md row">
        <div class="col-sm-auto col-12 row justify-center">
          <q-avatar
            size="150px"
            class="q-mr-sm-xl q-mb-lg"
          >
            <img
              src="~assets/resume-profile.jpg"
              class="object-fit-cover"
            >
          </q-avatar>
        </div>

        <div
          class="col-sm col-12 column justify-center text-justify"
        >
          Sou estudante de Engenharia da Computação na UNIVASF, fascinado pelas áreas de Data
          Science e Data Engineering, além de gostar de qualquer coisa relacionada com Inteligência
          Artificial. Almejo alcançar altas posições na área que gosto e viajar pelo mundo inteiro.
          Tento ser bem humorado e as vezes enérgico, mas gosto de discutir quando o assunto é R
          vs Python ou como a Inteligência Artificial vai dominar o mundo.
        </div>
      </div>

      <q-separator class="q-my-md" />

      <div class="col-sm col-12 q-pa-md column q-gutter-y-md q-pr-xl">
        <div
          class="resume-subtitle text-primary q-pl-md text-h6 text-weight-bold"
        >
          EXPERIÊNCIAS DE TRABALHO
        </div>

        <div>
          <div class="row q-mb-md justify-between">
            <div class="col-auto text-weight-bold text-h6">
              Desenvolvedor Front-End / Co-fundador
            </div>

            <div
              class="col-auto column justify-center text-caption text-grey-8"
            >
              Hectares | 2019 - Presente
            </div>
          </div>

          <p>
            Pela Hectares, trabalho com o desenvolvimento de aplicações mobile voltadas para a área
            da Agricultura. Dentre as principais tecnologias, estão:
            <ul>
              <li>Vue e Quasar</li>
              <li>JavaScript/Html5/Css3</li>
            </ul>
          </p>
        </div>

        <div>
          <div class="row q-mb-md justify-between">
            <div class="col-auto text-weight-bold text-h6">
              Estagiário em Ciência de Dados
            </div>

            <div
              class="col-auto column justify-center text-caption text-grey-8"
            >
              Sysvale | 2019 - Presente
            </div>
          </div>

          <p class="text-justify">
            Internamente migrei para a área de Ciencia de Dados e Business Intelligence onde
            trabalho com Algoritmos de Machine Learning e Processamento de Linguagem Natural
            aplicados a dados relacionados à Atenção Básica. Dentre as principais tecnologias,
            estão:
            <ul>
              <li>Flask (Deploy em Produção)</li>
              <li>ArangoDB</li>
              <li>Pandas</li>
              <li>Chatterbot</li>
              <li>BERT</li>
            </ul>
          </p>
        </div>

        <div>
          <div class="row q-mb-md justify-between">
            <div class="col-auto text-weight-bold text-h6">
              Estagiário em Desenvolvimento de Software
            </div>

            <div
              class="col-auto column justify-center text-caption text-grey-8"
            >
              Sysvale | 2019 - 2019
            </div>
          </div>

          <p class="text-justify">
            Inicialmente atuei como Desenvolvedor Full Stack, trabalhando principalmente com
            tecnologias como:
            <ul>
              <li>PHP/Laravel</li>
              <li>MongoDB</li>
              <li>JavaScript/Vue.js</li>
              <li>Html5/Css3</li>
            </ul>
          </p>
        </div>

        <div
          class="resume-subtitle text-primary q-pl-md q-mt-xl text-h6 text-weight-bold"
        >
          EXPERIÊNCIAS ACADÊMICAS
        </div>

        <div>
          <div class="row q-mb-md justify-between">
            <div class="col-auto text-weight-bold text-h6">
              Monitor de Algoritmos e Programação
            </div>

            <div
              class="col-auto column justify-center text-caption text-grey-8"
            >
              UNIVASF | 2015 - 2016
            </div>
          </div>

          <p class="text-justify">
            Pela Universidade Federal do Vale do São Francisco, participei de um projeto de ensino
            como monitor de algoritmos e programação, mais especificamente relacionado a linguagem
            C e a pseudolinguagem Portugol. O projeto tinha como objetivo apoiar as disciplinas de
            Introdução à Programação e Introdução à Algoritmos.
          </p>
        </div>
      </div>

      <q-separator
        v-if="!$q.screen.lt.sm"
        vertical
      />

      <div class="col-auto q-pa-md column q-gutter-y-md">
        <div
          class="resume-subtitle text-primary q-pl-md text-h6 text-weight-bold"
        >
          HABILIDADES
        </div>

        <div>
          <div class="text-weight-bold q-mb-sm text-subtitle1">
            Técnicas
          </div>

          <p>Python/Flask/Machine Learning</p>

          <p>JavaScript/Vue</p>

          <p>SQL/PostgreSQL/MySQL</p>

          <p>MongoDB/ArangoDB</p>

          <p>Html5/Css3</p>

          <div class="text-weight-bold q-mb-sm text-subtitle1">
            Profissionais
          </div>

          <p>Comunicação efetiva</p>

          <p>Trabalho em equipe</p>

          <p>Solucionador de problemas</p>
        </div>

        <div
          class="resume-subtitle text-primary q-pl-md text-h6 text-weight-bold"
        >
          EDUCAÇÃO
        </div>

        <div>
          <span
            class="text-weight-bold op-80"
          >
            Graduando em Egenharia da Computação
          </span><br>
          <span class="op-60">
            Universidade Federal do Vale do São Francisco <br>
            2014 - ?? <br>
          </span>
        </div>

        <div
          class="resume-subtitle text-primary q-pl-md text-h6 text-weight-bold"
        >
          LINGUAGEM
        </div>

        <div>
          <p>Português <span class="op-50">(Nativo)</span></p>

          <p>Inglês <span class="op-50">(Intermediário)</span></p>
        </div>
      </div>

      <q-separator class="q-my-md" />

      <div
        v-if="!$q.screen.lt.md"
        class="row justify-center col-12"
      >
        <q-btn
          v-for="(social, index) in socialMedias"
          :key="social.link"
          :class="{
            'q-mr-lg': index < socialMedias.length - 1,
          }"
          type="a"
          :href="social.link"
          target="_blank"
          class="text-weight-light"
          dense
          flat
          no-caps
        >
          <q-avatar
            rounded
            color="grey-9"
            text-color="white"
            :icon="social.icon"
            size="32px"
            class="q-mr-sm"
          />

          {{ social.text }}
        </q-btn>
      </div>

      <div
        v-else
        class="row justify-center col-12 q-py-md"
      >
        <q-btn
          v-for="(social, index) in socialMedias"
          :key="social.link"
          :icon="social.icon"
          color="grey-9"
          text-color="white"
          :class="{
            'q-mr-lg': index < socialMedias.length - 1,
          }"
          type="a"
          :href="social.link"
          target="_blank"
          dense
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      socialMedias: [
        {
          icon: 'fab fa-github-alt',
          text: 'github.com/LEMSantos',
          link: 'https://github.com/LEMSantos',
        },
        {
          icon: 'fab fa-linkedin-in',
          text: 'linkedin.com/in/lucas-eliaquim-1a7675181',
          link: 'https://www.linkedin.com/in/lucas-eliaquim-1a7675181/',
        },
        {
          icon: 'fab fa-twitter',
          text: '@LEliaquim',
          link: 'https://twitter.com/LEliaquim',
        },
      ],

      informations: [
        {
          icon: 'fas fa-envelope',
          text: 'lucas_m-santos@hotmail.com',
        },
        {
          icon: 'fas fa-globe-americas',
          text: 'lemsantos.github.io',
        },
        {
          icon: 'fas fa-map-marker-alt',
          text: 'Bahia',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.resume-subtitle {
  border-left: 5px solid #1976D2;
}

.object-fit-cover {
  object-fit: cover;
}
</style>
