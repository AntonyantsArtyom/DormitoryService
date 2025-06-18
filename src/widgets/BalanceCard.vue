<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="columnname">баланс</p>
      <q-separator />
      <div class="valuecontainer">
        <p class="columnname">Общежитие</p>
        <p class="value">120₽</p>
      </div>
      <q-separator />
      <div class="valuecontainer">
        <p class="columnname">Интернет</p>
        <p class="value">120₽</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.container {
  border-radius: 15px;

  .content {
    height: 80px;
    display: flex;
    gap: 10px;

    ::v-deep(.q-separator) {
      width: 1px;
      height: 100%;
    }

    .valuecontainer {
      display: grid;
    }

    .value {
      font-size: 24px;
      position: relative;
      top: -4px;
      color: #a8a099;
    }
  }

  .columnname {
    font-size: 16px;
  }
}
</style>
