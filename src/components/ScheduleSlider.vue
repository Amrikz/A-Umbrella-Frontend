<template>
  <div class="container">
    <div id="carouselExampleControls" class="carousel slide carousel-fade touch-enable" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(day,i) in schedule"
             :key="day.weekDay.name"
             :class="{'active': isDayActive(day,i)}"
             class="carousel-item"
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
                <span class="align-middle">{{ day.weekDay.name }}</span>
                <button class="btn p-0 my__btn" data-bs-slide="next" data-bs-target="#carouselExampleControls"
                        type="button">
                  <span aria-hidden="true" class="carousel-control-next-icon"></span>
                  <span class="visually-hidden">Следующий</span>
                </button>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(lesson,i) in day.lessons"
                :key="day.weekDay.name + lesson + i"
                class="table-success align-middle"
            >
              <th>{{ lesson.time }}</th>
              <td>{{ lesson.name }}</td>
              <td>
                <button v-if="lesson.homework" class="btn btn-dark p-1 p-sm-2" type="button">Д/З</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ScheduleSlider",
  setup() {
    const isHaveActiveDay = ref(false)
    const schedule = ref([
      {
        weekDay: {
          name: "Понедельник",
          number: 1
        },
        lessons: [
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: {
              test: 'test'
            }
          },
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          },
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          },
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          },
        ]
      },
      {
        weekDay: {
          name: "Вторник",
          number: 2
        },
        lessons: [
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          }
        ]
      },
      {
        weekDay: {
          name: "Среда",
          number: 3
        },
        lessons: [
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          }
        ]
      },
      {
        weekDay: {
          name: "Четверг",
          number: 4
        },
        lessons: [
          {
            name: 'Математика',
            time: '08:30 - 09:20',
            homework: null
          }
        ]
      },
    ]);

    function currentWeekDay() {
      const date = new Date();
      return date.getDay();
    }

    function isDayActive(day, i) {
      if (day.weekDay.number === currentWeekDay())
      {
        isHaveActiveDay.value = true
        return true
      }
      else if (i+1 === schedule.value.length && isHaveActiveDay.value === false)
      {
        return true
      }
      return false;
    }

    return {
      schedule,
      isHaveActiveDay,

      currentWeekDay,
      isDayActive
    }
  },

}
</script>

<style scoped>
.my__btn {
  margin-bottom: -5.6px;
}
</style>