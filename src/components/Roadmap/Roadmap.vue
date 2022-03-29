<template>
  <section class="roadmap">
    <div class="container">
      <div class="roadmap__target">
        <div class="roadmap__target-card roadmap__target-card1">
          <p class="roadmap__target-card1-description">
            “ By buying the token and joining the Rubik Network, anybody in the world will have a
            vote on how the Rubik Network treasury is used to fund planet-saving projects around the
            world.”
          </p>
          <p class="roadmap__target-card1-author">Dubin Nguyen</p>
        </div>
        <div class="roadmap__target-card roadmap__target-card2">
          <h2 class="roadmap__target-card2-heading">What’s the token use case?</h2>
          <p class="roadmap__target-card2-description">
            RIK gives you a voice in the Rubik Network, a global community dedicated to crowdfunding
            treasuries and using the money to fund world-changing projects.
          </p>
          <a href="" class="roadmap__target-card2-link">Read full whitepaper</a>
        </div>
        <div class="roadmap__target-card roadmap__target-card3">
          <h2 class="roadmap__target-card3-heading">Crypto for good.</h2>
          <p class="roadmap__target-card3-description">
            Buy Rubik Network. Join the Web3. Change the world.
          </p>
          <div class="roadmap__target-card3-contents">
            <div class="roadmap__target-card3-col">
              <p>Rubik price</p>
              <h2>0.1$</h2>
              <span>+10%</span>
            </div>
            <div class="roadmap__target-card3-col">
              <p>Rubik price</p>
              <h2>0.1$</h2>
              <span>+10%</span>
            </div>
            <div class="roadmap__target-card3-col">
              <p>Rubik price</p>
              <h2>0.1$</h2>
              <span>+10%</span>
            </div>
            <div class="roadmap__target-card3-col">
              <p>Rubik price</p>
              <h2>0.1$</h2>
              <span>+10%</span>
            </div>
          </div>
          <a href="" class="raodmap__target-card3-btn">Buy Rubik Token</a>
        </div>
      </div>
    </div>
    <div class="roadmap__content">
      <h1>The roadmap to decentralization</h1>
      <p>
        Our goal is to build a completely autonomous and democratic platform for people to
        collaborate and coordinate on making the world a better place.
      </p>
    </div>
    <div class="roadmap__divider"></div>
    <div class="roadmap__period-container">
      <div class="roadmap__period-right">
        <span class="roadmap__period-years-dash"></span>
        <div class="roadmap__period-years">
          <p>2022</p>
          <p>2023</p>
          <p>2024</p>
        </div>
      </div>
      <div class="roadmap__period-left">
        <template :key="index" v-for="(period, index) in periods">
          <div
            class="roadmap__period-content"
            :style="`margin-left: ${PERIODS_INDENT}px`"
            v-if="currentPeriod === index + 1"
          >
            <Period
              v-for="(item, index) in period"
              :key="index"
              :content="item.content"
              :progress="item.progress"
              :indent="PERIODS_INDENT * index"
            />
          </div>
        </template>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination__line">
        <div
          class="pagination__progress"
          :style="`width: ${(100 / (periods.length - 1)) * (currentPeriod - 1)}%`"
        ></div>
        <div
          class="pagination__item"
          v-for="item in Array.from({ length: periods.length }, (v, i) => i + 1).map((num, i) => ({
            rankOrder: num,
            title: `Q${num}`,
          }))"
          :key="item.rankOrder"
          :style="`
                    left: ${(100 / (periods.length - 1)) * (item.rankOrder - 1)}%;
                    background-color: ${currentPeriod > item.rankOrder - 1 ? '#f7e05f' : '#777e90'}
                        `"
          @click="currentPeriod = item.rankOrder"
        >
          <p
            :style="`color: ${currentPeriod === item.rankOrder ? '#f7e05f' : '#fff'}; font-size: ${
              currentPeriod === item.rankOrder ? '120%' : '100%'
            }`"
          >
            {{ item.title }}
          </p>
        </div>
        <div
          class="pagination__item-active"
          :style="`left: ${(100 / (periods.length - 1)) * (currentPeriod - 1)}%`"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import Period from '../../components/Period/Period.vue';
import data from './data';
import { WINDOW_WIDTH } from '../../constants/common';

export default {
  data() {
    return {
      currentPeriod: 1,
      PERIODS_INDENT: 30,
      periods: data,
    };
  },
  methods: {
    calcPeriodsIndent() {
      window.innerWidth < WINDOW_WIDTH.tablet
        ? (this.PERIODS_INDENT = 15)
        : (this.PERIODS_INDENT = 30);
    },
  },
  created() {
    this.calcPeriodsIndent();
  },
  mounted() {
    window.addEventListener('resize', this.calcPeriodsIndent);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calcPeriodsIndent);
  },
  components: { Period },
};
</script>

<style>
@import './Roadmap.css';
</style>
