<script setup lang="ts">
import HeaderComponent from "../widgets/HeaderComponent.vue";
import FooterComponent from "../widgets/FooterComponent.vue";
import TabsComponent from "../shared/UI/TabsComponent.vue";
import GymAppointments from "../widgets/GymAppointments.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content class="content">
      <TabsComponent
        label="записи"
        :tabs="[
          { name: 'gym', label: 'Спорт. зал', content: GymAppointments },
          { name: 'dance', label: 'Танц. зал', content: GymAppointments },
          { name: 'internet', label: 'Интернет', content: GymAppointments },
        ]"
      />
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

    .pagename {
      font-size: 16px;
    }
  }
}
</style>
