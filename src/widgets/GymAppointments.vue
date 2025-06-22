<script setup lang="ts">
import ActionButton from "../shared/UI/ActionButton.vue";
import DayToggle from "../shared/UI/DayToggle.vue";
import ResponsibleCard from "./ResponsibleCard.vue";
</script>

<template>
  <div class="widgetcontent">
    <DayToggle />
    <ResponsibleCard />
    <ActionButton label="стать ответственным на ПН 30.01" />
    <ActionButton label="изменить список ответственных" />
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
