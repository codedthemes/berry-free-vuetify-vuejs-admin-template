import type { ThemeDefinition } from 'vuetify';

const PurpleTheme: ThemeDefinition = {
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'carousel-control-size': 10,
    'high-opacity': 1,
    'medium-opacity': 0.8,
    'low-opacity': 0.5,
    'field-input-padding-top': '12px',
    'field-input-padding-bottom': '12px'
  },
  colors: {
    primary: '#1e88e5',
    secondary: '#5e35b1',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#eef2f6',
    lightsecondary: '#ede7f6',
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#212121',
    lightText: '#616161',
    darkprimary: '#1565c0',
    darksecondary: '#4527a0',
    borderLight: '#d0d0d0',
    inputBorder: '#787878',
    containerBg: '#eef2f6',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#90caf9',
    secondary200: '#b39ddb'
  }
};

export { PurpleTheme };
