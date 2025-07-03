<script setup lang="ts">
import ActionButton from "../shared/UI/ActionButton.vue";
import BalanceCard from "../entities/User/UI/BalanceCard.vue";
import HeaderComponent from "../widgets/HeaderComponent.vue";
import CertificatesCard from "../entities/User/UI/CertificatesCard.vue";
import FooterComponent from "../widgets/FooterComponent.vue";
import ActiveRecordsCard from "../entities/User/UI/ActiveRecordsCard.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content class="content">
      <BalanceCard />
      <!-- <ActionButton label="оплатить" /> -->
      <CertificatesCard />
      <ActiveRecordsCard />
    </q-content>
    <FooterComponent />
  </q-layout>
</template>

<style lang="scss" scoped>
.page {
  padding: 60px 16px;

  .content {
    display: grid;
    gap: 10px;
  }
}
</style>
