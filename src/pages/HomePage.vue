<script setup lang="ts">
import ActionButton from "../shared/UI/actionButton.vue";
import BalanceCard from "../widgets/BalanceCard.vue";
import HeaderComponent from "../widgets/HeaderComponent.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content>
      <BalanceCard />
      <ActionButton />
    </q-content>
  </q-layout>
</template>

<style lang="scss" scoped>
.page {
  padding: 0 16px;
  padding-top: 60px;
}
</style>
