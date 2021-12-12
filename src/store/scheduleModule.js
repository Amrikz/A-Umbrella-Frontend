import {inject} from "vue";
import axios from "axios";

export const scheduleModule = {
    namespaced: true,
    state: () => ({
        schedule: [],
        isScheduleLoading: false,
    }),
    getters: {

    },
    mutations: {
        setSchedule(state, schedule) {
            state.schedule = schedule;
        },
        setLoading(state, bool) {
            state.isScheduleLoading = bool
        },
    },
    actions: {
        async fetchSchedule({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get(inject('$apiURI') + inject('$apiAddPath') + '/week-days');
                commit('setSchedule', response.data.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
    }
};