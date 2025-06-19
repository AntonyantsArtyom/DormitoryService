<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../shared/states/UserStore";

const mail = ref("");
const pass = ref("");

const userStore = useUserStore();

const handleLogin = async () => {
  try {
    await userStore.login(mail.value, pass.value);
  } catch (err) {
    console.error("Ошибка входа", err);
  }
};
</script>

<template>
  <q-card class="container">
    <q-card-section class="content">
      <div class="headarea">
        <q-separator />
        <p class="text">Введите учетные данные</p>
        <q-separator />
      </div>
      <div class="inputarea">
        <q-input class="input" outlined v-model="mail" label="адрес электронной почты" />
        <q-input class="input" type="password" outlined v-model="pass" label="пароль" />
      </div>
      <q-btn class="button" unelevated color="primary" label="Вход" icon-right="arrow_forward" :loading="userStore.loading" @click="handleLogin" />
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.container {
  margin: auto;
  width: 100%;
  height: 290px;
  border-radius: 15px;

  .headarea {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    gap: 5px;
    padding-bottom: 15px;
  }

  .inputarea {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 40px;
  }

  .content {
    padding-top: 32px;
    height: 100%;
  }

  .text {
    color: #a8a099;
    font-size: 12px;
    margin: 0;
  }

  .input {
    ::v-deep(.q-field__control) {
      border-radius: 10px;
    }
  }

  .button {
    width: 100%;
    border-radius: 15px;
    ::v-deep(.q-icon) {
      margin-left: 5px;
      font-size: 20px;
    }
  }
}
</style>
