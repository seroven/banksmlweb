import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Inicio'
  },
  {
    name: 'Clients',
    url: '/panel/client',
    iconComponent: { name: 'cilPeople' }
  },
  {
    name: 'Agents',
    url: '/panel/agent',
    iconComponent: { name: 'cilUser' }
  }
];
