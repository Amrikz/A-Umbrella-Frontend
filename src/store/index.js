import { createStore } from 'vuex'
import {scheduleModule} from "@/store/scheduleModule";
import {userModule} from "@/store/userModule";

export default createStore({
  modules: {
    schedule: scheduleModule,
    user: userModule,
  }
})
