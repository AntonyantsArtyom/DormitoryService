<script setup lang="ts">
import { ref, onMounted, defineProps, type Component } from "vue";

type TabInfo = {
  name: string;
  label: string;
  content: Component;
};

const props = defineProps<{
  tabs: TabInfo[];
  label?: string;
}>();

const tab = ref<string>("");

onMounted(() => {
  if (props.tabs.length > 0) {
    tab.value = props.tabs[0].name;
  }
});
</script>

<template>
  <div class="tabscontainer">
    <p class="title" v-if="props?.label">{{ props.label }}</p>
    <q-tabs v-model="tab">
      <q-tab class="tabs" v-for="t in tabs" :key="t.name" :name="t.name" :label="t.label" />
    </q-tabs>
  </div>

  <q-tab-panels class="tabs" v-model="tab" animated>
    <q-tab-panel class="itemcontainer" v-for="t in tabs" :key="t.name" :name="t.name">
      <component :is="t.content" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<style lang="scss" scoped>
.tabscontainer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::v-deep(.q-tab) {
    text-transform: unset;
    padding: 0px;
  }

  ::v-deep(.q-tabs__content) {
    display: flex;
    gap: 10px;
  }

  ::v-deep(.q-tab__label) {
    font-size: 16px;
  }
}

.itemcontainer {
  padding: 0px;
}
</style>
