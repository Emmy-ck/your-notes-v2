import { createStore } from "vuex";

import authModule from "@/store/modules/auth/index";
import todoModule from "@/store/modules/todos/index";

export default createStore({
  modules: {
    auth: authModule,
    todos: todoModule,
  },
  state() {
    return {
      greeting: "",
    };
  },
  mutations: {
    setGreeting(state, payload) {
      state.greeting = payload;
    },
  },
  actions: {
    setGreeting(context) {
      let today = new Date();
      let hour = today.getHours();
      let greeting = "";
      let trimmedName = "";

      // if name is multi-worded, use the first word of the name
      let wordsInName = context.state.auth.user.displayName.split(" ");
      if (wordsInName.length > 0) {
        trimmedName = wordsInName[0];
      }

      // set an appropriate greeting based on the time
      if (hour >= 16) {
        greeting = `Good evening, ${trimmedName}`;
      } else if (hour >= 12) {
        greeting = `Good afternoon, ${trimmedName}`;
      } else if (hour >= 0) {
        greeting = `Good morning, ${trimmedName}`;
      }

      // commit a mutation to set the greeting
      context.commit("setGreeting", greeting);
    },
  },
  getters: {
    greeting(state) {
      return state.greeting;
    },
  },
});
