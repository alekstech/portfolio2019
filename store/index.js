export const state = () => ({
  sidebar: false
});

export const mutations = {
  toggleNavbar(state) {
    state.sidebar = !state.sidebar;
  },
  closeNavbar(state) {
    state.sidebar = false;
  }
};
