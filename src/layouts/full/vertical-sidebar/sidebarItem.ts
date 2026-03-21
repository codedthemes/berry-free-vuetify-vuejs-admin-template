import {
  CircleIcon,
  WindmillIcon,
  TypographyIcon,
  ShadowIcon,
  PaletteIcon,
  KeyIcon,
  BugIcon,
  DashboardIcon,
  BrandChromeIcon,
  HelpIcon
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Default',
    icon: DashboardIcon,
    to: '/dashboard/default'
  },
  { divider: true },
  { header: 'Pages' },
  {
    title: 'Authentication',
    icon: KeyIcon,
    to: '/auth',
    children: [
      {
        title: 'Login',
        icon: CircleIcon,
        to: '/authentication/login'
      },
      {
        title: 'Register',
        icon: CircleIcon,
        to: '/authentication/register'
      }
    ]
  },
  {
    title: 'Error 404',
    icon: BugIcon,
    to: '/maintenance/error'
  },
  { divider: true },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: TypographyIcon,
    to: '/utils/typography'
  },
  {
    title: 'Shadows',
    icon: ShadowIcon,
    to: '/utils/shadow'
  },
  {
    title: 'Colors',
    icon: PaletteIcon,
    to: '/utils/color'
  },

  {
    title: 'Icons',
    icon: WindmillIcon,
    to: '/utils/icons',
    children: [
      {
        title: 'Tabler Icons',
        icon: CircleIcon,
        to: 'https://tabler.io/icons',
        type: 'external'
      },
      {
        title: 'Material Icons',
        icon: CircleIcon,
        to: 'https://pictogrammers.com/library/mdi/',
        type: 'external'
      }
    ]
  },
  { divider: true },
  {
    title: 'Sample Page',
    icon: BrandChromeIcon,
    to: '/starter'
  },
  {
    title: 'Documentation',
    icon: HelpIcon,
    to: 'https://codedthemes.gitbook.io/berry-vuetify/',
    type: 'external'
  }
];

export default sidebarItem;
