<script setup lang="ts">
import ActionIconButton from "../shared/UI/ActionIconButton.vue";
import { useUserStore } from "../shared/states/UserStore";

const userStore = useUserStore();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}.${month}.${year}: ${hours}:${minutes}`;
};
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Активные записи</p>
      <q-separator />
      <div class="valuecontainer">
        <div class="valueitem" v-for="event in userStore.user?.activeEvents" :key="event.id">
          <div>
            <p class="title">{{ event.type }}</p>
            <div class="dateinfo">
              <q-badge rounded color="green" />
              <p class="date">{{ formatDate(event.startTime) }} - {{ formatDate(event.endTime) }}</p>
            </div>
          </div>
          <div class="actions">
            <ActionIconButton v-if="event.closable" />
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

      .actions {
        display: grid;
        place-content: center;
      }
    }

    .title {
      font-size: 16px;
    }

    .dateinfo {
      display: flex;
      gap: 5px;
      align-items: center;

      .date {
        font-size: 14px;
        color: #a8a099;
      }
    }
  }
}
</style>
