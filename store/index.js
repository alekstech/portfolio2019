export const state = () => ({
  sidebar: false
});

export const mutations = {
  toggleSidebar(state, val) {
    console.log('toggleSidebar');
    state.sidebar = val;
  }
};
