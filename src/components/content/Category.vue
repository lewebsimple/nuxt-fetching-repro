<template>
  <div id="category">
    <h1 class="text-4xl font-bold mb-4">{{ name }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="post.uri">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

\
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import postsByCategoryIdQuery from "~/graphql/posts-by-category-id.query.gql";

interface Post {
  id: string;
  title: string;
  uri: string;
}

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
  async fetch() {
    const { posts } = await this.$graphql.default.request(postsByCategoryIdQuery, { categoryId: this.categoryId });
    this.posts = posts.nodes;
  },
});
</script>
