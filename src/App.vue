<template>
  <Header />
  <Features />
  <Roadmap />
  <Team />
  <Financial />
  <Footer />
</template>

<script>
import Header from './components/Header/Header.vue';
import Features from './components/Features/Features.vue';
import Roadmap from './components/Roadmap/Roadmap.vue';
import Team from './components/Team/Team.vue';
import Footer from './components/Footer/Footer.vue';
import Financial from './components/Financial/financial.vue';

export default {
  name: 'App',
  components: {
    Header,
    Features,
    Roadmap,
    Team,
    Footer,
    Financial,
  },
};
</script>

<style>
@import './css/__variables.css';
@import './css/__base.css';
@import './css/__reset.css';

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
</style>
