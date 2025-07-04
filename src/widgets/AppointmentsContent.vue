<script setup lang="ts">
import DayToggle from "../shared/UI/DayToggle.vue";
import AppointmentsCard from "../entities/Appointments/UI/AppointmentsCard.vue";
import ResponsibleCard from "../shared/UI/ResponsibleCard.vue";
import { computed, onMounted, ref, toRef, watch, watchEffect } from "vue";
import { useAppoinmentsStore } from "../entities/Appointments/state/AppointmentsStore";

const selectorRef = ref();

const selectedDate = computed(() => {
  const offset = selectorRef.value?.selectedDay ?? 0;
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
});

const appointmentsStore = useAppoinmentsStore();

const props = defineProps<{ activeTab: string }>();
const activeTab = toRef(props, "activeTab");

watch(
  [activeTab, selectedDate],
  () => {
    appointmentsStore.setFilters({
      page: activeTab.value,
      date: selectedDate.value,
    });
  },
  { immediate: true }
);
</script>

<template>
  <div class="widgetcontent">
    {{ activeTab }}
    {{ JSON.stringify(appointmentsStore.filter) }}

    <DayToggle ref="selectorRef" />
    <ResponsibleCard />
    <AppointmentsCard />
  </div>
</template>

<style lang="scss" scoped>
.widgetcontent {
  display: grid;
  gap: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
}
</style>
