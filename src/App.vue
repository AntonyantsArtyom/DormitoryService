<script setup lang="ts">
import { useUserStore } from "./shared/states/UserStore";
import { onMounted } from "vue";
const userStore = useUserStore();

onMounted(() => {
  userStore.getWholeUser();
});
</script>

<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style>
p {
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>

<style>
p {
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
