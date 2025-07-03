<script setup lang="ts">
import LoginForm from "../features/LoginForm.vue";
import applogo from "../shared/icons/applogo.svg";
</script>

<template>
  <div class="page">
    <img :src="applogo" />
    <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 0 16px;
  padding-top: 150px;
  display: grid;
  gap: 15px;
  justify-items: center;
}
</style>
