export const state = () => ({
  counter: 0,
  repair: false
});

export const mutations = {
  increment (state) {
    state.counter++;
  },
  repair (state, value) {
    state.repair = value;
  }
};
