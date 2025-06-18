<script setup lang="ts"></script>

<template>
  <q-footer elevated class="footer">
    <q-toolbar class="content q-justify-around">
      <div class="navitem column items-center">
        <q-icon name="home" size="20px" />
        <span class="text-caption">Главная</span>
      </div>
      <div class="navitem column items-center">
        <q-icon name="logout" size="20px" />
        <span class="text-caption">Выйти</span>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  position: fixed;
  align-content: center;
  padding: 0 16px;
  bottom: 0px;
  height: 48px;

  ::v-deep(.q-toolbar) {
    padding: 0;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .navitem {
      display: grid;
      justify-items: center;
    }
  }
}
</style>
