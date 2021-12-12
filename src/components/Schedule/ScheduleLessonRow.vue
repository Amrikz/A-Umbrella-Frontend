<template>
  <tr
      :class="
        {
          'table-primary': schedule.lesson_type.slug === 'lecture' && schedule.lesson,
          'table-success': schedule.lesson_type.slug === 'practice' && schedule.lesson,
          'table-info': schedule.lesson_type.slug === 'online' && schedule.lesson,
          'table-secondary': !schedule.lesson,
        }
      "
      class="align-middle"
  >
    <th>{{ schedule.time }}</th>
    <td>{{ schedule.lesson ? schedule.lesson.name : '' }}</td>
    <td>
      <div>
        <a
            v-if="
              schedule.lesson
              && (schedule.lesson_type.slug === 'online' || schedule.lesson_type.slug === 'lecture')
              && schedule.lesson.zoom_link !== null
            "
            :href="schedule.lesson.zoom_link"
            class="btn btn-primary knopka-zoom"
            role="button"
            target="_blank"
        >
          ZOOM
        </a>
        <button
            v-if="schedule.lesson ? schedule.lesson.homework.length > 0 : false"
            class="btn knopka-dz"
            style="border-radius: 25px;"
            @click="toggleHW"
        >
          Д/З
        </button>
      </div>
    </td>
  </tr>
  <tr v-if="schedule.lesson ? schedule.lesson.homework.length > 0 : false">
    <td
        colspan="3"
        :class="
        {
          'table-primary': schedule.lesson_type.slug === 'lecture' && schedule.lesson,
          'table-success': schedule.lesson_type.slug === 'practice' && schedule.lesson,
          'table-info': schedule.lesson_type.slug === 'online' && schedule.lesson,
          'table-secondary': !schedule.lesson,
          'd-none': !isHwEnabled,
        }
      "
    >
      <div
          style="text-align: center;"
          :id="'flush-collapse' + schedule.lesson.id + '_' + schedule.id"
      >
        <div class="accordion-body">
          {{ schedule.lesson.homework[0].end_date }}
          <hr/>
          {{ schedule.lesson.homework[0].description }}
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ScheduleLessonRow",
  props: {
    schedule: {
      required: true,
      type: Object
    }
  },
  setup() {
    const isHwEnabled = ref(false);

    function toggleHW() {
      isHwEnabled.value = isHwEnabled.value === false;
    }

    return {
      isHwEnabled,

      toggleHW
    }
  }
}
</script>

<style scoped>
.knopka-zoom {
  text-align: center;
  max-width: 100%;
  border-radius: 25px;
  font-size: 14px;
  float: left;
  width: 100%;
  height: 4.6vh;
}

.knopka-dz {
  display: block;
  text-align: center;
  width: 100%;
  height: 5vh;
  max-width: 100%;
  background: black;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  float: left;
  margin-top: 5px;
  padding: 0;
}
</style>