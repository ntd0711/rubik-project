<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="features__heading">One Experience, One Wallet</h2>
      <div class="features__container" :style="`grid-template-columns: repeat(${totalCol}, 1fr);`">
        <div class="features__col" :key="`col-${index}`" v-for="(cards, index) in cardsWillRender">
          <FeaturesCard :key="`card-${card.id}`" :card="card" v-for="card in cards" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from './data';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard.vue';
import { WINDOW_WIDTH } from '../../constants/common';

export default {
  data() {
    return {
      data,
      totalCol: this.calcCol(window.innerWidth),
      cardsWillRender: [],
    };
  },
  methods: {
    calcCol(windowWidth) {
      return windowWidth > WINDOW_WIDTH.tablet ? 2 : 1;
    },
    generateCards() {
      const cols = Array.from({ length: this.totalCol }, () => []);
      let countCol = this.totalCol - 1;

      for (let i = 0; i < data.length; i++) {
        cols[countCol]?.push(data[i]);
        countCol--;
        if (countCol < 0) countCol = this.totalCol - 1;
      }

      this.cardsWillRender = cols;
    },
  },
  mounted() {
    this.generateCards();
    let timeout = null;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const { innerWidth } = window;
        this.totalCol = this.calcCol(innerWidth);
        this.generateCards();
      }, 400);
    };

    window.addEventListener('resize', handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  components: { FeaturesCard },
};
</script>

<style>
@import './Features.css';
</style>
