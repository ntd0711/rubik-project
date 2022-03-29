<template>
  <div class="roadmap__period-time" :style="`margin-left: ${indent}px`">
    <div
      class="roadmap__period-time-before"
      :style="`width: ${progress > 100 ? 100 : progress}%`"
    ></div>
    {{ content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      margin: 30,
    };
  },
  props: {
    content: String,
    progress: Number,
    indent: Number,
  },
};
</script>

<style>
@import './Period.css';
</style>
