<template>
  <div class="protocol" id="protocol">
    <h2 class="protocol-label">Stablecoin Minting Protocol</h2>
    <img :src="protocol" alt="roadmap-image" class="protocol-img" />
    <div class="protocol-content">
      We've done it carefully and simply. 
      Combined with the ingredients makes for beautiful landings. 
      It is definitely the tool you need to speed up your design process.
    </div>
  </div>
</template>

<script>
  import { protocol } from './export';
  import './Protocol.css';
  export default {
    data() {
      return { protocol }
    }
  }
</script>