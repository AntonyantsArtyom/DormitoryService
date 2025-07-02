<template>
  <q-btn outline color="primary" icon="close" class="custom-btn" @click="$emit('click')" />
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
defineEmits(["click"]);
</script>

<style lang="scss" scoped>
.custom-btn {
  width: 30px;
  height: 30px;
  padding: 0;
}
</style>
