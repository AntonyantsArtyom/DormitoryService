<script setup lang="ts">
import ActionButton from "../../../shared/UI/ActionButton.vue";
import { useUserStore } from "../../User/state/UserStore";
import { useAppoinmentsStore } from "../state/AppointmentsStore";

const appoinmentsStore = useAppoinmentsStore();
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Записи на понедельник 30.05</p>
      <q-separator />
      <div class="valuecontainer">
        <div class="valueitem" v-for="appointment in appoinmentsStore.appointments" :key="appointment.id">
          <span class="date">{{ appointment.startTime }} - {{ appointment.endTime }}</span>
          <span class="count">{{ appointment.bookingCount }}/{{ appointment.limit }}</span>
          <div class="buttoncontainer">
            <ActionButton v-if="!appointment.isBookedByMe && appointment.bookingCount !== appointment.limit" label="записаться" @click="() => appoinmentsStore.addBooking(appointment.id)" />
            <ActionButton v-if="appointment.isBookedByMe" negative label="отменить запись" @click="() => appoinmentsStore.deleteBooking(appointment.id)" />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 15px;

  .cardtitle {
    font-size: 16px;
  }

  .content {
    display: grid;
    gap: 5px;
  }

  .valuecontainer {
    display: grid;
    gap: 10px;

    .valueitem {
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
  }
}
</style>
