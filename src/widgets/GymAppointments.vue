<script setup lang="ts">
import DayToggle from "../shared/UI/DayToggle.vue";
import AppointmentsCard from "../entities/Appointments/UI/AppointmentsCard.vue";
import ResponsibleCard from "../shared/UI/ResponsibleCard.vue";

defineProps<{ activeTab: string }>();
</script>

<template>
  <div class="widgetcontent">
    {{ activeTab }}
    <DayToggle />
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
