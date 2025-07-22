<script setup lang="ts">
import DayToggle from "../shared/UI/DayToggle.vue";
import AppointmentsCard from "../entities/Appointments/UI/AppointmentsCard.vue";
import ResponsibleCard from "../shared/UI/ResponsibleCard.vue";
import { computed, ref, toRef, watch } from "vue";
import { useAppoinmentsStore } from "../entities/Appointments/state/AppointmentsStore";
import ActionButton from "../shared/UI/ActionButton.vue";
import { useUserStore } from "../entities/User/state/UserStore";

const selectorRef = ref();

const selectedDate = computed(() => {
  const offset = selectorRef.value?.selectedDay ?? 0;
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${yyyy}-${mm}-${dd}`;

  return formattedDate;
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
    appointmentsStore.getAppointments();
  },
  { immediate: true }
);

const userStore = useUserStore();

const isGymResponsible = computed(() => userStore.user?.role.includes("Ответственный за зал"));
const isGymMainResponsible = computed(() => userStore.user?.role.includes("Главный за спортзал"));
</script>

<template>
  <div class="widgetcontent">
    <DayToggle ref="selectorRef" />
    <ResponsibleCard />
    <div id="GYM" v-if="activeTab === 'GYM'">
      <ActionButton v-if="isGymResponsible" label="стать ответственным" />
      <ActionButton v-if="isGymMainResponsible" label="назначить ответственного" />
      <ActionButton v-if="isGymMainResponsible" label="изменить список ответственных" />
    </div>
    <AppointmentsCard :date="selectedDate" />
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
