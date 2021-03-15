<template>
  <div id="post">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
  </div>
</template>

\
<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
