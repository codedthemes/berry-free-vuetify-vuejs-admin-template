import { ref } from 'vue';
import { defineStore } from 'pinia';
import config from '@/config';

export const useCustomizerStore = defineStore('customizer', () => {
  const Sidebar_drawer = ref(config.Sidebar_drawer);
  const Customizer_drawer = ref(config.Customizer_drawer);
  const mini_sidebar = ref(config.mini_sidebar);
  const fontTheme = ref(config.fontTheme);
  const inputBg = ref(config.inputBg);

  function SET_SIDEBAR_DRAWER() {
    Sidebar_drawer.value = !Sidebar_drawer.value;
  }

  function SET_CUSTOMIZER_DRAWER(payload: boolean) {
    Customizer_drawer.value = payload;
  }

  function SET_MINI_SIDEBAR(payload: boolean) {
    mini_sidebar.value = payload;
  }

  function SET_INPUTBG(payload: boolean) {
    inputBg.value = payload;
  }

  function SET_FONT(payload: string) {
    fontTheme.value = payload;
  }

  return {
    Sidebar_drawer,
    Customizer_drawer,
    mini_sidebar,
    fontTheme,
    inputBg,
    SET_SIDEBAR_DRAWER,
    SET_CUSTOMIZER_DRAWER,
    SET_MINI_SIDEBAR,
    SET_FONT,
    SET_INPUTBG
  };
});
