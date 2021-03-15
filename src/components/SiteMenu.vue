<template>
  <div class="shadow mb-2">
    <nav class="container py-2">
      <ul class="flex items-center -mx-1">
        <li v-for="item in items" :key="item.id" class="mx-1">
          <nuxt-link :to="item.url">
            {{ item.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import menuItemsQuery from "../graphql/menu-items.query.gql";

interface MenuItem {
  id: string;
  label: string;
  url: string;
}

export default defineComponent({
  data() {
    return {
      items: [] as MenuItem[],
    };
  },
  async fetch() {
    const { menuItems } = await this.$graphql.default.request(menuItemsQuery, { location: "PRIMARY" });
    this.items = menuItems.nodes.map((item: MenuItem) => ({
      ...item,
      url: item.url.replace(this.$config.baseURL, ""),
    }));
  },
});
</script>

<style>
a {
  @apply text-blue-500 hover:text-blue-700;
}
</style>
