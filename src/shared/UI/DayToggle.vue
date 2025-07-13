<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";

const urlParams = new URLSearchParams(window.location.search);
const selectedDay = ref(urlParams.get("date") ? dayjs(urlParams.get("date")).startOf("day").diff(dayjs().startOf("day"), "day") : 0);

defineExpose({ selectedDay });
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

function handleChange(value: number) {
  const date = new Date();
  date.setDate(date.getDate() + value);

  const yyyy = date.getFullYear();
  const mm = `0${date.getMonth() + 1}`.slice(-2);
  const dd = `0${date.getDate()}`.slice(-2);

  const formattedDate = `${yyyy}-${mm}-${dd}`;

  window.history.replaceState(null, "", `?date=${formattedDate}`);
}
</script>

<template>
  <div class="content">
    <q-btn-toggle v-model="selectedDay" :options="options" flat @update:model-value="handleChange" />
  </div>
</template>

<style scoped>
.content {
  overflow-x: scroll;
}
.q-btn__content {
  white-space: pre-line;
  text-align: center;
}
</style>
