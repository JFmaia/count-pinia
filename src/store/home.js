import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => {
    return { value: 0 };
  },
  actions: {
    toogleValue() {
      this.value = this.value + 1;
    },
  },
  getters: {
    getValue(state){
        return state.value
    }
  },
});