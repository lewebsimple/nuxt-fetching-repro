<template>
  <div class="container my-8">
    <component :is="node.__typename" v-bind="node" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import nodeByUriQuery from "~/graphql/node-by-uri.query.gql";
import Category from "~/components/content/Category.vue";
import Page from "~/components/content/Page.vue";
import Post from "~/components/content/Post.vue";

export default defineComponent({
  components: {
    Category,
    Page,
    Post,
  },
  async asyncData({ $graphql, route, error }) {
    try {
      const { nodeByUri } = await $graphql.default.request(nodeByUriQuery, { uri: route.path });
      if (!nodeByUri) throw new Error("Page not found");
      return { node: nodeByUri };
    } catch (err) {
      error({ statusCode: 404, message: err.message });
    }
  },
});
</script>
