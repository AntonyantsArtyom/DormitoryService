<script setup lang="ts">
import { useUserStore } from "../shared/states/UserStore";
import dayjs from "dayjs";

const userStore = useUserStore();

function getTimeProgressPercent(startDate: string | undefined, endDate: string | undefined): number {
  if (!startDate || !endDate) {
    return 0;
  }

  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const now = dayjs();

  if (now.isAfter(end)) return 0;
  if (now.isBefore(start)) return 0;

  const total = end.diff(start, "millisecond");
  const passed = now.diff(start, "millisecond");

  return 1 - passed / total;
}
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Справки от врачей</p>
      <q-separator />
      <div class="valuecontainer">
        <p class="valuetitle">Педикулез и чесотка</p>
        <q-linear-progress class="progress" :value="getTimeProgressPercent(userStore.user?.pediculosis.startDate, userStore.user?.pediculosis.endDate)" />
        <p class="date">дата окончания: {{ userStore.user?.pediculosis.endDate }}</p>
      </div>
      <div class="valuecontainer">
        <p class="valuetitle">Флюорография</p>
        <q-linear-progress class="progress" :value="getTimeProgressPercent(userStore.user?.fluorography.startDate, userStore.user?.fluorography.endDate)" />
        <p class="date">дата окончания: {{ userStore.user?.fluorography.endDate }}</p>
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
    gap: 5px;

    .valuetitle {
      font-size: 18px;
    }
    .progress {
      height: 20px;
      border-radius: 8px;
    }
    .date {
      font-size: 14px;
      color: #a8a099;
    }
  }
}
</style>
