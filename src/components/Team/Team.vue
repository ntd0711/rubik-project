<template>
  <div class="team" id="ourteam">
    <h2 class="team-label">Our Team behind Rubik</h2>
    <div class="team-description">
      Our customers and partners vary from local start-ups to Fortune 1000 MNCs all over the world
    </div>
    <div class="team-list">
      <ul class="team-list-wrap">
        <MemberCard v-for="(member, index) in members" :key="index" :img="member.img" :name="member.name" :position="member.position" :desc="member.desc" />
      </ul>
    </div>
    
    <!-- Mobile Slide -->
    <swiper :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 28,
        allowSlidePrev: true,
        allowSlideNext: true
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowSlidePrev: true,
        allowSlideNext: true
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowSlidePrev: true,
        allowSlideNext: true
      },
    }" :centeredSlides="true">
      <swiper-slide v-for="(member, index) in members" :key="index">
        <MemberCard :img="member.img" :name="member.name" :position="member.position" :desc="member.desc" /> 
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.min.css';
  import 'swiper/swiper.min.css';

  import './Team.css';

  import MemberCard from './MemberCard.vue';

  export default {
    data() {
      return {
        members: [
          {
            img: "member.png",
            name: "Hai Nguyen",
            position: "Founder  / CTO",
            desc: "Serial founder and crypto enthusiast developing our smart contracts and protocol."
          },
          {
            img: "member.png",
            name: "Riki Pham",
            position: "CEO/Co-Founder",
            desc: "Veteran entrepreneur with advising Rubikon finance and growth."
          },
          {
            img: "member.png",
            name: "Dubin Nguyen",
            position: "Co-Founder/General Manager",
            desc: "Using his experience growing cryptocurrencies to help grow Rubik quickly."
          },
          {
            img: "member.png",
            name: "Louis Nguyen",
            position: "Social media manager",
            desc: "Manages Rubik's social media channels and content."
          },
          {
            img: "member.png",
            name: "Ha Pham",
            position: "Lead Developer",
            desc: "A Silicon Valley-based full-stack software engineer building the Rubik website and dApp."
          },
          {
            img: "member.png",
            name: "Hai Nguyen",
            position: "Investor & advisor",
            desc: "Rubik contributor,  $MVK regular, and crypto expert helping grow the Rubik network."
          }
        ]
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      MemberCard
    },
  };
</script>