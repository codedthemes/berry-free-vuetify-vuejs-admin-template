import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { icons } from './mdi-icon'; // Import icons from separate file
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PurpleTheme } from '@/theme/LightTheme';

export default createVuetify({
  display: {
    thresholds: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1440
    }
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      ...icons
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'PurpleTheme',
    themes: {
      PurpleTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VField: {
      variant: 'outlined',
      baseColor: 'inputBorder',
      color: 'primary'
    },
    VTextField: {
      rounded: 'lg',
      variant: 'outlined',
      baseColor: 'inputBorder',
      color: 'primary'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
