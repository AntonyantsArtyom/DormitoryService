<script setup lang="ts">
import HeaderComponent from "../widgets/HeaderComponent.vue";
import FooterComponent from "../widgets/FooterComponent.vue";
import TabsComponent from "../shared/UI/TabsComponent.vue";
import ActionButton from "../shared/UI/ActionButton.vue";
import KitchenShedule from "../widgets/KitchenShedule.vue";
</script>

<template>
  <q-layout class="page">
    <HeaderComponent />
    <q-content class="content">
      <TabsComponent
        label="расписание"
        :tabs="[
          { name: 'kitchen', label: 'Кухня', content: KitchenShedule },
          { name: 'COOP', label: 'СООП', content: ActionButton },
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
