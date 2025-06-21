<script setup lang="ts">
import { ref } from "vue";

const selectedDay = ref(0);

const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

const options = Array.from({ length: 14 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();

  return {
    label: `${dayOfWeek}\n${dayOfMonth}`,
    value: i,
  };
});
</script>

<template>
  <q-btn-toggle v-model="selectedDay" :options="options" flat />
</template>

<style scoped>
.q-btn__content {
  white-space: pre-line;
  text-align: center;
}
</style>
