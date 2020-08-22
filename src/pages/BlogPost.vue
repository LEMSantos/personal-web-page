<template>
  <q-page class="q-mt-xl flex flex-center">
    <div class="max-width">
      <vue-showdown
        class="markdown-body w-100"
        :markdown="markdown"
        flavor="github"
        :options="options"
        :extensions="['showdownHightlight']"
      />
    </div>
  </q-page>
</template>

<script>
import { VueShowdown, showdown } from 'vue-showdown';
import showdownHighlight from 'showdown-highlight';

export default {
  components: {
    VueShowdown,
  },

  data() {
    return {
      markdown: '',
      options: {
        omitExtraWLInCodeBlocks: true,
        noHeaderId: false,
        prefixHeaderId: false,
        rawPrefixHeaderId: false,
        ghCompatibleHeaderId: false,
        rawHeaderId: false,
        headerLevelStart: 1,
        parseImgDimensions: true,
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true,
        literalMidWordUnderscores: false,
        literalMidWordAsterisks: false,
        strikethrough: true,
        tables: true,
        tablesHeaderId: false,
        ghCodeBlocks: true,
        tasklists: true,
        smoothLivePreview: true,
        smartIndentationFix: false,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks: false,
        requireSpaceBeforeHeadingText: false,
        ghMentions: true,
        ghMentionsLink: 'https://github.com/{u}',
        encodeEmails: false,
        openLinksInNewWindow: true,
        backslashEscapesHTMLTags: true,
        emoji: true,
        underline: false,
        completeHTMLDocument: false,
        metadata: true,
        splitAdjacentBlockquotes: true,
      },
    };
  },

  created() {
    showdown.extension('showdownHightlight', showdownHighlight);
  },

  mounted() {
    this.$axios.get('test')
      .then((response) => {
        this.markdown = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>

.max-width {
  max-width: 70%;
}

@media (max-width: 1024px) {
  .max-width {
    max-width: 90%;
    margin: 0 auto;
  }
}

.w-100 {
  width: 100%;
}
</style>
