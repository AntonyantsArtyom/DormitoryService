<script setup lang="ts"></script>

<template>
  <q-header elevated class="header">
    <q-toolbar>
      <p class="name">Иванов Иван Иванович</p>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
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
