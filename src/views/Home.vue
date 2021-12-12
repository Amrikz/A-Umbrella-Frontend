<template>
<!--  <br><br>-->
  <div class="container my__page">
    <schedule-slider/>
  </div>
</template>

<script>
// @ is an alias to /src

import ScheduleSlider from "@/components/Schedule/ScheduleSlider";
export default {
  name: 'Home',
  components: {ScheduleSlider}
}
</script>

<style scoped>
.my__page {
  margin: max(1vw, 2vh) auto;
}
</style>