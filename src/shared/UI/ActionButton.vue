<template>
  <q-btn class="button" unelevated color="primary" label="Оплатить" v-bind="$attrs" />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 40px;
  border-radius: 15px;
}
</style>
