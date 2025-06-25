<script setup lang="ts">
import { useUserStore } from "../shared/states/UserStore";

const userStore = useUserStore();
</script>

<template>
  <q-header elevated class="header">
    <q-toolbar>
      <p class="name">{{ userStore.user?.lastName }} {{ userStore.user?.firstName }} {{ userStore.user?.middleName }}</p>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  align-content: center;
  padding: 0 16px;
  height: 48px;

  ::v-deep(.q-toolbar) {
    padding: 0;
  }

  .name {
    font-size: 16px;
    margin-left: auto;
  }
}
</style>
