<script setup lang="ts">
import { ref } from "vue";
import ActionButton from "../../../shared/UI/ActionButton.vue";
import type { IAppoinment } from "../state/AppointmentsStore";

const props = defineProps<{
  appointment: IAppoinment;
  onAdd: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}>();

const isLoading = ref(false);

const addClickHandler = async () => {
  isLoading.value = true;
  try {
    await props.onAdd(props.appointment.id);
  } catch (error) {
  } finally {
    isLoading.value = false;
  }
};

const deleteClickHandler = async () => {
  isLoading.value = true;
  try {
    await props.onDelete(props.appointment.id);
  } catch (error) {
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="container">
    <p class="date">{{ appointment.startTime }} - {{ appointment.endTime }}</p>
    <p class="count">{{ appointment.bookingCount }}/{{ appointment.limit }}</p>
    <div class="buttoncontainer">
      <ActionButton :loading="isLoading" v-if="!appointment.isBookedByMe && appointment.bookingCount !== appointment.limit" label="записаться" @click="addClickHandler" />
      <ActionButton :loading="isLoading" v-if="appointment.isBookedByMe" negative label="отменить запись" @click="deleteClickHandler" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.date {
  font-size: 16px;
  color: #a8a099;
}

.count {
  font-size: 16px;
}

.button {
  height: 25px;
  width: 150px;
  font-size: 10px;
  box-sizing: border-box;
  padding: 0;

  ::v-deep(.q-btn__content) {
    font-size: 18px;
    text-transform: lowercase;
  }
}
</style>
