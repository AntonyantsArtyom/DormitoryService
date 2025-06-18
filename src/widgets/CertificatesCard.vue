<template>
  <q-card class="container">
    <q-card-section class="content">
      <p class="cardtitle">Справки от врачей</p>
      <q-separator />
      <div class="valuecontainer">
        <p class="valuetitle">Педикулез и чесотка</p>
        <q-linear-progress class="progress" :value="0.3" />
        <p class="date">дата окончания: 12.02.23</p>
      </div>
      <div class="valuecontainer">
        <p class="valuetitle">Флюорография</p>
        <q-linear-progress class="progress" :value="0.6" />
        <p class="date">дата окончания: 12.02.23</p>
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
