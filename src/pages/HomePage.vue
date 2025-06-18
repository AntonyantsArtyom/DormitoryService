<script setup lang="ts">
import ActionButton from "../shared/UI/ActionButton.vue";
import BalanceCard from "../widgets/BalanceCard.vue";
import HeaderComponent from "../widgets/HeaderComponent.vue";
import CertificatesCard from "../widgets/CertificatesCard.vue";
import ActiveRecordsCard from "../widgets/ActiveRecordsCard.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content class="content">
      <BalanceCard />
      <ActionButton />
      <CertificatesCard />
      <ActiveRecordsCard />
    </q-content>
  </q-layout>
</template>

<style lang="scss" scoped>
.page {
  padding: 0 16px;
  padding-top: 60px;

  .content {
    display: grid;
    gap: 10px;
  }
}
</style>
