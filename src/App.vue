<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
const name = ref("");
</script>

<template>
  <div>
    <h1>ПРИВЕТ</h1>
    <q-input v-model="name" label="Введите имя" filled />

    <q-btn label="Показать" color="primary" class="q-mt-md" @click="$q.notify(`Привет, ${name || 'незнакомец'}!`)" />
  </div>
</template>

<style scoped></style>
