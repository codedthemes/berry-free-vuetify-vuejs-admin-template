import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme, GreenTheme, PinkTheme, YellowTheme, SeaGreenTheme, OliveGreenTheme, SpeechBlueTheme } from '@/theme/LightTheme';
import {
  DarkPurpleTheme,
  DarkGreenTheme,
  DarkSpeechBlueTheme,
  DarkOliveGreenTheme,
  DarkPinkTheme,
  DarkYellowTheme,
  DarkSeaGreenTheme
} from '@/theme/DarkTheme';

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme,
      GreenTheme,
      PinkTheme,
      YellowTheme,
      SeaGreenTheme,
      OliveGreenTheme,
      SpeechBlueTheme,
      DarkPurpleTheme,
      DarkGreenTheme,
      DarkSpeechBlueTheme,
      DarkOliveGreenTheme,
      DarkPinkTheme,
      DarkYellowTheme,
      DarkSeaGreenTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
