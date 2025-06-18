<script setup lang="ts">
import ActionIconButton from "../shared/UI/ActionIconButton.vue";
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Активные записи</p>
      <q-separator />
      <div class="valuecontainer">
        <div class="valueitem" v-for="n in 3" :key="n">
          <div>
            <p class="title">Дежурство на кухне</p>
            <div class="dateinfo">
              <q-badge rounded color="green" />
              <p class="date">сегодня</p>
            </div>
          </div>
          <div class="actions">
            <ActionIconButton />
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
