<template>
  <pacman-preloader
      v-if="$store.state.schedule.isScheduleLoading && schedule.length <= 0"
      style="margin: auto;"
      class="d-flex justify-content-center align-items-center"
  />
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide carousel-fade touch-enable" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(day,i) in schedule"
             :key="day.name"
             :class="{'active': isDayActive(day,i)}"
             class="carousel-item"
             data-bs-interval="20000"
        >
          <!-- Понедельник -->
          <table class="table table-hover">
            <thead class="table-dark">
            <tr>
              <th class="text-center text-uppercase" colspan="3" style="font-size: 20px;">
                <button class="btn p-0 my__btn" data-bs-slide="prev" data-bs-target="#carouselExampleControls"
                        type="button">
                  <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                  <span class="visually-hidden">Прошлый</span>
                </button>
                <span class="align-middle">{{ day.name }}</span>
                <button class="btn p-0 my__btn" data-bs-slide="next" data-bs-target="#carouselExampleControls"
                        type="button">
                  <span aria-hidden="true" class="carousel-control-next-icon"></span>
                  <span class="visually-hidden">Следующий</span>
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
              <ScheduleLessonRow
                  v-for="(schedule,i) in day.schedule"
                  :key="day.name + schedule + i"
                  :schedule="schedule"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from 'vuex'
import PacmanPreloader from "@/components/UI_components/PacmanPreloader";
import ScheduleLessonRow from "@/components/Schedule/ScheduleLessonRow";

export default {
  name: "ScheduleSlider",
  components: {ScheduleLessonRow, PacmanPreloader},
  setup() {
    const store = useStore();
    const isHaveActiveDay = ref(false)
    const schedule = computed(() => store.state.schedule.schedule);
    store.dispatch('schedule/fetchSchedule')

    function currentWeekDay() {
      const date = new Date();
      return date.getDay();
    }

    function isDayActive(day, i) {
      if (day.number === currentWeekDay()) {
        isHaveActiveDay.value = true
        return true
      } else if (i + 1 === schedule.value.length && isHaveActiveDay.value === false) {
        return true
      }
      return false;
    }

    return {
      schedule,
      isHaveActiveDay,

      currentWeekDay,
      isDayActive,
    }
  },

}
</script>

<style scoped>
.my__btn {
  margin-bottom: -5.6px;
}
</style>