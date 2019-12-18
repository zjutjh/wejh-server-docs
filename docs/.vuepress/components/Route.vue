<template>
  <div class="routeBlock" :id="path">
    <p class="badge">
      <code>{{ path }}</code>
      <Badge type="tip" :text="method" />
      <Badge type="warning" text="需要认证" v-if="auth" />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    method: {
      type: String,
      required: true
    },
    auth: {
      type: Boolean,
      default: true
    },
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    // renderMarkdown(item) {
    //   const md = require("markdown-it")({
    //     html: true
    //   });
    //   return md.render(item);
    // }
  }
};
</script>

<style>
/* .routeBlock {
  margin: 1rem 0 2rem;
} */
</style>
