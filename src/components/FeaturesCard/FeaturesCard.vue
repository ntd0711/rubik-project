<template>
  <div class="features__card">
    <div class="features__card-top">
      <div class="features__card-avt">
        <img :src="card.avatar" alt="" />
      </div>
      <div class="features__card-text">
        <h5 :class="{ other: card.id === 4 }">{{ card.title }}</h5>
        <p>{{ card.description }}</p>
      </div>
    </div>
    <div class="features__card-bottom" :class="{ other: card.id === 4 }">
      <div
        :class="{ other: card.id === 4, disabled: icon.status === 'disabled' }"
        :key="icon.img"
        v-for="icon in card.icons"
        class="features__card-icon"
      >
        <img :src="icon.img" alt="" />
        <p class="features__card-icon--status" v-if="icon.status === 'disabled'">Coming soon</p>
        <p class="features__card-icon--text" v-if="icon.text">{{ icon?.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style>
@import './FeaturesCard.css';
</style>
