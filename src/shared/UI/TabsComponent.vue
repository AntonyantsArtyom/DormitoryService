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
  <div>
    <p v-if="props?.label">{{ props.label }}</p>
    <q-tabs v-model="tab" class="text-primary" dense active-color="primary" indicator-color="primary">
      <q-tab v-for="t in tabs" :key="t.name" :name="t.name" :label="t.label" />
    </q-tabs>
  </div>

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel v-for="t in tabs" :key="t.name" :name="t.name">
      <component :is="t.content" />
    </q-tab-panel>
  </q-tab-panels>
</template>
