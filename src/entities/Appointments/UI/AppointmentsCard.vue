<script setup lang="ts">
import AppointmentsCardLine from "./AppointmentsCardLine.vue";
import { useAppoinmentsStore } from "../state/AppointmentsStore";
import dayjs from "dayjs";
import { computed } from "vue";

const appoinmentsStore = useAppoinmentsStore();

const { date } = defineProps<{ date?: string }>();
const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const dayOfWeek = computed(() => (date ? daysOfWeek[dayjs(date).day()] : ""));
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Записи на {{ dayOfWeek }} {{ date ? dayjs(date).format("DD.MM") : dayjs().format("DD.MM") }}</p>
      <q-separator />
      <div class="valuecontainer">
        <AppointmentsCardLine
          v-for="appointment in appoinmentsStore.appointments"
          :key="appointment.id"
          :appointment="appointment"
          :onAdd="appoinmentsStore.addBooking"
          :onDelete="appoinmentsStore.deleteBooking"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 15px;

  .cardtitle {
    font-size: 16px;
  }

  .content {
    display: grid;
    gap: 5px;
  }

  .valuecontainer {
    display: grid;
    gap: 10px;
  }
}
</style>
