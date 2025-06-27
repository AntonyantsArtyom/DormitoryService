<script setup lang="ts">
import ActionButton from "../shared/UI/ActionButton.vue";
import BalanceCard from "../widgets/BalanceCard.vue";
import HeaderComponent from "../widgets/HeaderComponent.vue";
import CertificatesCard from "../widgets/CertificatesCard.vue";
import ActiveRecordsCard from "../widgets/ActiveRecordsCard.vue";
import FooterComponent from "../widgets/FooterComponent.vue";
import { useUserStore } from "../shared/states/UserStore";
import { onMounted } from "vue";
const userStore = useUserStore();

onMounted(() => {
  userStore.getWholeUser();
});
</script>

<template>
  <q-layout class="page">
    <p>{{ JSON.stringify(userStore.user, null, 2) }}</p>
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
