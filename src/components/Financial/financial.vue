<template>
  <div class="financial">
    <div class="financial-content">
      <h2>Get the financial super app!</h2>
      <img :src="logo" alt="logo-img" class="financial-content-img" />
      <div class="financial-button-list">
        <FinancialButton appImg="./src/assets/financial_assets/googleplay.png" appAlt="google-play-img" appName="Google Play" />
        <FinancialButton appImg="./src/assets/financial_assets/appstore.png" appAlt="app-store-img" appName="App Store" />
      </div>
      <img :src="specular" alt="specular-img" class="financial-content-cube financial-content-cube--specular" />
      <img :src="specular2" alt="specular2-img" class="financial-content-cube financial-content-cube--specular2" />
    </div>
  </div>
</template>

<script>
  import { logo, specular, specular2 } from './export.js';
  import FinancialButton from './FinancialButton.vue';
  import './Financial.css';

  export default {
    components: {
      FinancialButton
    },
    data() {
      return { logo, specular, specular2 }
    }
  }
</script>