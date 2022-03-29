<!-- Member Template -->
<template>
  <li class="member" data-aos="fade-up">
    <img :src="`./src/assets/team_assets/${img}`" alt="member-image" class="member-img" />
    <div class="member-top">
      <div class="member-name">{{name}}</div>
      <div class="member-position">{{position}}</div>
    </div>
    <div class="member-desc">{{desc}}</div>
  </li>
</template>

<script>
  import './MemberCard.css';
  export default {
    props: ['img', 'name', 'position', 'desc'],
  }
</script>