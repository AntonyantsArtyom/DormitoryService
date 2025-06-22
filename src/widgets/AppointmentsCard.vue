<script setup lang="ts">
import ActionButton from "../shared/UI/ActionButton.vue";
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Записи на понедельник 30.05</p>
      <q-separator />
      <div class="valuecontainer">
        <div class="valueitem" v-for="n in 12" :key="n">
          <span class="date">10:30 - 15:20</span>
          <span class="count">3/5</span>
          <div class="buttoncontainer">
            <ActionButton label="записаться" />
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
