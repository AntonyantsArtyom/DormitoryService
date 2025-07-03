<script setup lang="ts">
import HeaderComponent from "../widgets/HeaderComponent.vue";
import FooterComponent from "../widgets/FooterComponent.vue";
import TabsComponent from "../shared/UI/TabsComponent.vue";
import AppointmentsContent from "../widgets/AppointmentsContent.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content class="content">
      <TabsComponent
        label="записи"
        :tabs="[
          { name: 'GYM', label: 'Спорт. зал', content: AppointmentsContent },
          { name: 'HALL', label: 'Танц. зал', content: AppointmentsContent },
          { name: 'INTERNET', label: 'Интернет', content: AppointmentsContent },
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
