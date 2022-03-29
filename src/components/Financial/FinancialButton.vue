<template>
  <a href="#" class="financial-button-item">
    <div class="financial-button-item-wrap">
      <img :src="`${appImg}`" :alt="appAlt" />
      <div class="financial-button-item-info">Get it on <span>{{appName}}</span></div>
    </div>
  </a>
</template>

<script>
  import './FinancialButton.css';
  
  export default { 
    props: ['appImg', 'appAlt', 'appName']
  }
</script>