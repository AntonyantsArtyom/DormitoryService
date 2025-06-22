<script setup lang="ts">
import DayToggle from "../shared/UI/DayToggle.vue";
import AppointmentsCard from "./AppointmentsCard.vue";
import ResponsibleCard from "./ResponsibleCard.vue";
</script>

<template>
  <div class="widgetcontent">
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
