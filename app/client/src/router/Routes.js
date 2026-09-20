import {
  Dashboard,
  Insights,
  Transactions,
  Settings,
  Profile
} from './index.js';

const Routes = {
  '/': {
    component: Profile,
    title: 'Profile',
    requiresAuth: true
  },
  '/overview': {
    component: Dashboard,
    title: 'Dashboard Overview',
    requiresAuth: true
  },
  '/insights': {
    component: Insights,
    title: 'Analytics',
    requiresAuth: true
  },
  '/transactions': {
    component: Transactions,
    title: 'Transactions',
    requiresAuth: true
  },
  '/settings': {
    component: Settings,
    title: 'Settings',
    requiresAuth: true
  },
  '/profile': {
    component: Profile,
    title: 'Profile',
    requiresAuth: false
  }
};

export default Routes;
