<template>
  <q-btn class="button" unelevated :color="negative ? 'negative' : 'primary'" :label="label" v-bind="$attrs" />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  label: string;
  negative?: boolean;
}>();
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 40px;
  border-radius: 15px;
  text-transform: unset;
}
</style>
