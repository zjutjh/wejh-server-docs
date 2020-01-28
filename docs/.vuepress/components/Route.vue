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
  }
};
</script>

<style>

</style>
