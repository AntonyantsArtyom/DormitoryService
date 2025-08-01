<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "../entities/User/state/UserStore";

const router = useRouter();

const userStore = useUserStore();

const goHome = () => router.push("/");
const goAppointments = () => router.push("/appointment");
const goShedule = () => router.push("/shedule");
const goLogin = () => {
  userStore.logout();
  router.push("login");
};
</script>

<template>
  <q-footer elevated class="footer">
    <q-toolbar class="content q-justify-around">
      <div class="navitem column items-center" @click="goHome">
        <q-icon name="home" size="20px" />
        <span class="text-caption">Главная</span>
      </div>
      <div class="navitem column items-center" @click="goAppointments">
        <q-icon name="event_note" size="20px" />
        <span class="text-caption">Записи</span>
      </div>
      <div class="navitem column items-center" @click="goShedule">
        <q-icon name="calendar_today" size="20px" />
        <span class="text-caption">Расписание</span>
      </div>
      <div class="navitem column items-center" @click="goLogin">
        <q-icon name="logout" size="20px" />
        <span class="text-caption">Выйти</span>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  position: fixed;
  align-content: center;
  padding: 0 16px;
  bottom: 0px;
  height: 48px;

  ::v-deep(.q-toolbar) {
    padding: 0;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .navitem {
      display: grid;
      justify-items: center;
      cursor: pointer;
    }
  }
}
</style>
